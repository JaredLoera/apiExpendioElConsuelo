import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import Brand from '#models/brand'

export default class ProductsController {
    async store({ request, response }: HttpContext) {
        const { name, price } = request.only(['name', 'price'])
        const product = new Product()
        product.name = name
        product.price = price
        if (await product.save()) {
            return response.created(product)
        }
        return response.abort({ message: "Failed to create product" })
    }
    async getBrandsOfProducts({ response }: HttpContext) {
        const products = await Brand.query().orderBy('id', 'asc')
        return response.ok(products)
    }
    async getProductsForBrand({ params, response }: HttpContext) {
        const brandId = params.id
        const products = await Product.query().where('brandId', brandId)
        return response.ok(products)
    }
}