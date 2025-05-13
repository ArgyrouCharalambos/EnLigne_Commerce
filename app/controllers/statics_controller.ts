import type { HttpContext } from '@adonisjs/core/http'

export default class StaticsController {
  public async about({ view }: HttpContext) {
    return view.render('pages/static/about', {
      meta: {
        title: "Notre Histoire | Boutique Luxe",
        description: "Découvrez l'histoire derrière notre marque"
      }
    })
  }

  public async contact({ view }: HttpContext) {
    return view.render('pages/static/contact', {
      meta: {
        title: "Contactez-nous | Boutique Luxe",
        description: "Des questions ? Notre équipe vous répond sous 24h"
      }
    })
  }
}