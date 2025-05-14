/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Product from '#models/product'
import router from '@adonisjs/core/services/router'
const ProductsController = () => import('#controllers/products_controller')
const ShopController = () => import('#controllers/shops_controller')


router.get('/admin', async ({ view }) => {
  return view.render('welcome')
})

// Gardez les routes admin pour les produits
router.resource('products', ProductsController).except(['destroy'])

router.post('/delete/:id' , [ProductsController , 'destroy'])

const Produit = await Product.all()
router.get('/', ({ view }) => view.render('shop/home' , {products:Produit}))
router.get('/shop', [ShopController, 'index'])
router.get('/shop/:id', [ShopController, 'show'])
router.get('/cart', [ShopController, 'cart'])
router.post('/cart/add', [ShopController, 'addToCart'])
router.get('/contact', [ShopController, 'contact'])