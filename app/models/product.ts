import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
  
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare name: string
  
  @column()
  declare description: string | null
  
  @column()
  declare price: number
  
  @column()
  declare image_url: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}