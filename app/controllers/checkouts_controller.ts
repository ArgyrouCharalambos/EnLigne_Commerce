import type { HttpContext } from '@adonisjs/core/http'

export default class CheckoutsController {
  // Page de paiement
  public async index({ view, session,response }: HttpContext) {
    const cart = session.get('cart', { items: [], total: 0 })
    
    if (cart.items.length === 0) {
      return response.redirect().toRoute('cart.index')
    }

    return view.render('pages/checkout', {
      meta: { title: "Finalisation de commande" },
      cart
    })
  }

  // Traitement du paiement
  public async process({ request, response, session }: HttpContext) {
    // const payload = await request.validate({
    //   schema: schema.create({
    //     firstName: schema.string({ trim: true }),
    //     lastName: schema.string({ trim: true }),
    //     email: schema.string([rules.email()]),
    //     address: schema.object().members({
    //       street: schema.string(),
    //       city: schema.string(),
    //       zip: schema.string()
    //     })
    //   })
    // })

    const order = {
    //   ...payload,
      items: session.get('cart.items'),
      total: session.get('cart.total'),
      reference: `CMD-${Date.now()}`
    }

    session.forget('cart')
    session.flash('success', 'Commande validée ! Suivi: ' + order.reference)

    return response.redirect().toRoute('order.confirmation', { id: order.reference })
  }
}