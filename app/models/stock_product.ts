import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import Product from './product.js'

export default class StockProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare contentUnits: number

  @column()
  declare imagen: string

  @column()
  declare brandId: number

  @column()
  declare stockProductId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static getOnlyCharolaProducts() {
    return Product.query().where('contentUnits', 24).orWhere('contentUnits', 12)
  }
}