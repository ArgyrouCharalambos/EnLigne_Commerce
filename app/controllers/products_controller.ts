import Product from '#models/product'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ view }: HttpContext) {
    const products = await Product.all()
    return view.render('products/index', { products })
  }

  async create({ view }: HttpContext) {
    return view.render('products/create')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'description', 'price', 'image_url'])
    await Product.create(data)
    return response.redirect().toRoute('products.index')
  }

  async show({ params, view }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    return view.render('products/show', { product })
  }

  async edit({ params, view }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    return view.render('products/edit', { product })
  }

  async update({ params, request, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'description', 'price', 'image_url'])
    product.merge(data).save()
    return response.redirect().toRoute('products.index')
  }

  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.redirect().toRoute('products.index')
  }
}