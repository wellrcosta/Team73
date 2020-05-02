'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
	return {
		greeting: 'Hello world in JSON',
	};
});
Route.post('/populate', 'Populate.Do');

Route.post('/users', 'UserController.create');

Route.post('/sessions', 'SessionController.create');

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
