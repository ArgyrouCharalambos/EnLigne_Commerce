/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/home')

router.get('/', 'ShopController.index').as('home')
router.get('/products/:id', 'ShopController.show').as('product.show')

// Pages statiques
router.get('/about', async ({ view }) => view.render('pages/about'))
router.get('/contact', async ({ view }) => view.render('pages/contact'))