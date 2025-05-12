import {BaseSchema} from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description').nullable()
      table.decimal('price', 8, 2).notNullable()
      table.string('image').nullable()
      table.string('thumbnail').nullable()
      table.enum('category', ['electronics', 'fashion', 'home', 'sports'])
      table.boolean('is_featured').defaultTo(false)
      table.integer('stock').unsigned().defaultTo(0)   
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }
}