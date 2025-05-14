import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug').notNullable().unique()
      table.decimal('old_price', 10, 2).nullable()
      table.string('category').notNullable()
      table.integer('stock').notNullable().defaultTo(0)
      table.boolean('is_featured').notNullable().defaultTo(false)
    })
  }

}
