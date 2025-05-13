/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ShopController = () => import('#controllers/shops_controller')
const CartController = () => import('#controllers/carts_controller')
const CheckoutController = () => import('#controllers/checkouts_controller')
const StaticController = () => import('#controllers/statics_controller')


// router.on('/').render('pages/home')

// router.get('/', [ShopsController , 'index']).as('home')
// router.get('/products/:id', [ShopsController , 'show']).as('product.show')

// Catalogue
router.get('/', [ShopController , 'index']).as('home')
router.get('/produits/:slug', [ShopController , 'show']).as('products.show')
router.get('/recherche', [ShopController , 'search']).as('products.search')

// Panier
router.get('/panier', [CartController , 'index']).as('cart.index')
// router.post('/panier', [CartController , 'show']).as('cart.store')

// Commande
router.group(() => {
    router.get('/', [CheckoutController , 'index']).as('index')
    router.post('/process', [CheckoutController , 'process']).as('process')
}).prefix('/checkout')

// Pages statiques
router.get('/a-propos', [StaticController , 'about']).as('about')
router.get('/contact', [StaticController , 'contact']).as('contact')
// // Pages statiques
// router.get('/about', async ({ view }) => view.render('pages/about'))
// router.get('/contact', async ({ view }) => view.render('pages/contact'))