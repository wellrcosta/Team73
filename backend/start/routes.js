'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/populate', 'PopulateController.Do');
Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.get('/products', 'ProductController.index');
Route.post('/products', 'ProductController.store').middleware('auth');
Route.get('/products/:id', 'ProductController.show').middleware('auth');
Route.put('/products/:id', 'ProductController.update').middleware('auth');
Route.delete('/products/:id', 'ProductController.destroy').middleware('auth');
Route.post('/category', 'CategoryController.store').middleware('auth');
Route.get('/category', 'CategoryController.index').middleware('auth');
Route.delete('/category/:id', 'CategoryController.destroy').middleware('auth');
Route.get('/myOrders', 'CustomerOrderController.index').middleware('auth');
Route.post('/myOrders', 'CustomerOrderController.store').middleware('auth');
Route.get('/myOrders/:id', 'CustomerOrderController.show').middleware('auth');
Route.put('/myOrders/:id', 'CustomerOrderController.update').middleware('auth');

Route.get('/orders', 'SellerOrderController.index').middleware('auth');
Route.get('/orders/:id', 'SellerOrderController.show').middleware('auth');
Route.put('/orders/:id', 'SellerOrderController.update').middleware('auth');

Route.get('/addresses', 'AddressController.index').middleware('auth');
Route.post('/addresses', 'AddressController.store').middleware('auth');
Route.get('/addresses/:id', 'AddressController.show').middleware('auth');
Route.put('/addresses/:id', 'AddressController.update').middleware('auth');
Route.delete('/addresses/:id', 'AddressController.destroy').middleware('auth');
Route.resource('/user', 'CustomerController')
		.apiOnly()
		.only(['store', 'update', 'destroy']);
Route.resource('/seller', 'SellerController')
		.apiOnly()
		.only(['store', 'update', 'destroy']);
