import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ShopController {
  // Page d'accueil
  public async index({ view }: HttpContext) {
    // const [
    //   featuredProducts,
    //   newArrivals,
    //   bestSellers,
    // ] = await Promise.all([
    //   Product.query()
    //     .where('is_featured', true)
    //     .orderBy('created_at', 'desc')
    //     .limit(8),
    //   Product.query()
    //     .orderBy('created_at', 'desc')
    //     .limit(4),
    //   Product.query()
    //     .orderBy('sales_count', 'desc')
    //     .limit(4)
    // ])

    return view.render('pages/home', {
      meta: {
        title: "Boutique Luxe | Élégance Moderne",
        description: "Découvrez notre collection exclusive de produits haut de gamme"
      },
      // featuredProducts,
      // newArrivals,
      // bestSellers,
    })
  }

  // Détails produit
  public async show({ params, view }: HttpContext) {
    // const product = await Product.query()
    //   .where('slug', params.slug)
    //   .preload('relatedProducts', query => query.limit(4))
    //   .firstOrFail()

    return view.render('pages/products/show', {
      meta: {
        // title: `${product.name} | Boutique Luxe`,
        // description: product.shortDescription,
        // image: product.mainImage
      },
      // product
    })
  }

  // Recherche de produits
  public async search({ request, view }: HttpContext) {
    // // const { q } = await request.validate({
    // //   schema: schema.create({
    // //     q: schema.string({ trim: true })
    // //   })
    // // })

    // const results = await Product.query()
    //   .where('name', 'ILIKE', `%${q}%`)
    //   .orWhere('description', 'ILIKE', `%${q}%`)
    //   .limit(12)

    return view.render('pages/search', {
      // meta: { title: `Résultats pour : ${q}` },
      // query: q,
      // results
    })
  }
}