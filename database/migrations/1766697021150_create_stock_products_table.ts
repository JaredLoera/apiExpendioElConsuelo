import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stock_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('imagen')
      table.integer('brand_id').unsigned().references('id').inTable('brands')
      table.decimal('price', 10, 2)
      table.integer('content_units').notNullable().defaultTo(1)
      table.integer('stock_product_id').unsigned().references('id').inTable('stock_products').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}