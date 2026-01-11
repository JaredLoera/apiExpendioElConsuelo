import { DateTime } from 'luxon'
import { BaseModel, column,hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import StockProduct from './stock_product.js'


export default class Stock extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare stock_product_id: number

  @column()
  declare total_units: number

  @column()
  declare min_stock: number

  @column()
  declare name_unit: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => StockProduct, {
    foreignKey: 'id',
    localKey: 'stock_product_id',
  })
  declare product: HasOne<typeof StockProduct>
}