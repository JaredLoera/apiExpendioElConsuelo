import type { HttpContext } from '@adonisjs/core/http'
import OrderDetails from '#models/order_details'
import Order from '#models/order'
import { DateTime } from 'luxon'
import db from '@adonisjs/lucid/services/db'
import Product from '#models/product'
import Stock from '#models/stock'


export default class OrdersController {
    async store({ request, response, auth }: HttpContext) {
        const orderDetails: OrderDetails[] = request.input('orderDetails')
        const order = new Order()
        if (auth.user) {
            order.userId = auth.user.id
            if (await order.save()) {
                const orderID = order.id
                for (let i = 0; i < orderDetails.length; i++) {
                    const element = orderDetails[i];
                    const orderDetailsave = new OrderDetails()
                    orderDetailsave.orderId = orderID
                    orderDetailsave.productId = element.productId
                    orderDetailsave.quantity = element.quantity
                    const product = await Product.find(element.productId)
                    //rebajar de invetario 
                    if (product) { 
                       const stock = await Stock.findBy('stock_product_id', product.stockProductId)
                       if(stock){
                        stock.total_units = stock.total_units - element.quantity* product.contentUnits  
                        await stock.save()                             
                       }
                    }
                    await orderDetailsave.save()
                }
                return response.created({ message: 'Order created successfully' })
            }
        } else {
            response.status(401).json({ message: 'Unauthorized' })
        }
    }

    async ObtenerConsumoEnMesActual({ response }: HttpContext) {
        const now = DateTime.now()
        const startOfMonth = now.startOf('month')
        const endOfMonth = now.endOf('month')
        
        const ventas = await db
            .from('order_details')
            .whereBetween('order_details.created_at', [startOfMonth.toSQL(), endOfMonth.toSQL()])
            .join('products', 'products.id', 'order_details.product_id')
            .select(
                'products.id',
                'products.name'
            )
            .sum('order_details.quantity as quantity')
            .select(
                db.raw('SUM(order_details.quantity * products.price) as total')
            )
            .groupBy('products.id')

        return response.ok(ventas)

    }
    async ObtenerConsumoEnMesActualPorUsuario({ auth, response }: HttpContext) {
        if (!auth.user) {
            return response.unauthorized({ message: 'Unauthorized' })
        }

        const now = DateTime.now()
        const startOfMonth = now.startOf('month')
        const endOfMonth = now.endOf('month')

        const ventas = await db
            .from('order_details')
            .whereBetween('order_details.created_at', [startOfMonth.toSQL(), endOfMonth.toSQL()])
            .join('orders', 'orders.id', 'order_details.order_id')
            .join('products', 'products.id', 'order_details.product_id')
            .where('orders.user_id', auth.user.id)
            .select(
                'products.id',
                'products.name'
            )
            .sum('order_details.quantity as quantity')
            .select(
                db.raw('SUM(order_details.quantity * products.price) as total')
            )
            .groupBy('products.id')

        return response.ok(ventas)
    }
}