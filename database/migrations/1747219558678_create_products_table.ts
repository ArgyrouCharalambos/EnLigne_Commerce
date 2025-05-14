import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('slug')
      table.dropColumn('old_price')
      table.dropColumn('category')
      table.dropColumn('stock')
      table.dropColumn('is_featured')
    })
  }

}