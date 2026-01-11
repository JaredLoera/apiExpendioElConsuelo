import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stocks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('stock_product_id').unsigned().references('id').inTable('stock_products').onDelete('CASCADE')
      table.integer('total_units').notNullable().defaultTo(0)
      table.integer('min_stock').notNullable().defaultTo(0)
      table.string('name_unit').notNullable().defaultTo('unidad')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}