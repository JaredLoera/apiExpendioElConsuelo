import Stock from '#models/stock'
import type { HttpContext } from '@adonisjs/core/http'
import StockProduct from '#models/stock_product'

export default class StocksController {

    public async getStocks({ response }: HttpContext) {
        return response.ok((await Stock.query().preload('product')).toReversed())
    }
    async getStockProductsByBrandId({ params, response }: HttpContext) {
        const products = await StockProduct.query().where('brand_id', params.id)
        return response.ok(products)
    }
    async updateStock({ request, params,response }: HttpContext) {
        const { packageUnits } = request.only(['packageUnits'])

        const stockProduct = await StockProduct.find(params.stockId)
        if (stockProduct) {
            const stock = await Stock.findBy('stock_product_id', stockProduct.id)
            if (stock) {
                stock.total_units += packageUnits * stockProduct.contentUnits
                await stock.save()
                return response.ok({ message: 'Stock updated successfully'})
            } else {
                return response.status(404).json({ message: 'Stock not found for the given product' })
            }

        }

       
    }
}