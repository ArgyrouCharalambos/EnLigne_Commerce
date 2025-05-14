import Product from '#models/product'
import { HttpContext } from '@adonisjs/core/http'

export default class ShopController {
  async index({ view }: HttpContext) {
    const products = await Product.all()
    return view.render('shop/index', { products })
  }

  async show({ params, view }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const relatedProducts = await Product.query().whereNot('id', params.id).limit(4)
    return view.render('shop/show', { product, relatedProducts })
  }

  async cart({ view }: HttpContext) {
    // Dans une vraie app, on utiliserait des sessions
    return view.render('shop/cart')
  }

  async addToCart({ request, response }: HttpContext) {
    // Ici on simule l'ajout au panier (à remplacer par un système de session)
    const productId = request.input('product_id')
    return response.redirect().toRoute('shop.cart')
  }

  async contact({ view }: HttpContext) {
    return view.render('shop/contact')
  }
}