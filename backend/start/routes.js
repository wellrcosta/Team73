'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

<<<<<<< HEAD
Route.get('/populate', 'PopulateController.Do');
Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.resource('/products', 'ProductController').apiOnly().middleware('auth');

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
Route.group(() => {
	Route.resource('/user', 'CustomerController')
		.apiOnly()
		.only(['store', 'update', 'destroy']);
});
Route.group(() => {
	Route.resource('/seller', 'SellerController')
		.apiOnly()
		.only(['store', 'update', 'destroy']);
});
>>>>>>> 5718e6c60fbbae5fad73a782b73e21a803c19e40
