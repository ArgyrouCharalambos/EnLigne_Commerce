import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class CartsController {
  // Affichage du panier
  public async index({ view, session }: HttpContext) {
    const cart = session.get('cart', { items: [], total: 0 })
    
    return view.render('pages/card/index', {
      meta: { title: "Votre panier | Boutique Luxe" },
      cart
    })
  }

  // Ajout au panier
  public async store({ request, response, session }: HttpContext) {
    // const { productId, quantity } = await request.validate({
    //   schema: schema.create({
    //     productId: schema.number(),
    //     quantity: schema.number.optional([rules.range(1, 10)])
    //   })
    // })

    // // const product = await Product.findOrFail(productId)
    // const cart = session.get('cart', { items: [], total: 0 })

    // // const existingItem = cart.items.find(item => item.id === productId)
    
    // if (existingItem) {
    //   existingItem.quantity += quantity || 1
    // } else {
    //   cart.items.push({
    //     id: product.id,
    //     name: product.name,
    //     price: product.price,
    //     image: product.mainImage,
    //     quantity: quantity || 1
    //   })
    // }

    // cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    // session.put('cart', cart)

    return response.redirect().back()
  }
}