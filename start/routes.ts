/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const OrdersController = () => import('#controllers/orders_controller')
const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')
const ProductsController = () => import('#controllers/products_controller')
const StocksController = () => import('#controllers/stocks_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'


router.group(() => {

  router.group(() => {
    router.post('/orders', [OrdersController, 'store'])
    router.get('/orders/resumen', [OrdersController, 'ObtenerConsumoEnMesActual'])
    router.post('/products', [ProductsController, 'store'])
    router.get('/profile', [UsersController, 'show'])

    router.get('/brands', [ProductsController, 'getBrandsOfProducts'])
    router.get('/brands/:id/products', [ProductsController, 'getProductsForBrand'])

    router.get('/orders/resumen/usuario', [OrdersController, 'ObtenerConsumoEnMesActualPorUsuario'])

    router.get('/stocks', [StocksController, 'getStocks'])

    router.get('/users', [UsersController, 'index'])

    router.get('/stock-products/brand/:id', [StocksController, 'getStockProductsByBrandId'])
    router.put('/stock-products/:stockId', [StocksController, 'updateStock'])
  }).use(middleware.auth({ guards: ['api'] }))




  router.post('/users', [UsersController, 'store'])
  router.post('/sessions', [SessionController, 'login'])
}).prefix('/api')


