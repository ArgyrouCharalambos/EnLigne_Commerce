import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ShopsController {
 
  public async index({ view }: HttpContext) {
    const featuredProducts = await Product.query().where('is_featured', true).limit(4)
    const newArrivals = await Product.query().orderBy('created_at', 'desc').limit(8)
    const bestSellers = await Product.query().orderBy('stock', 'asc').limit(4)

    return view.render('shop/index', {
      featuredProducts,
      newArrivals,
      bestSellers
    })
  }

  public async show({ params, view }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const relatedProducts = await Product.query()
      .where('category', product.category)
      .whereNot('id', product.id)
      .limit(4)

    return view.render('shop/show', {
      product,
      relatedProducts
    })
  }
}