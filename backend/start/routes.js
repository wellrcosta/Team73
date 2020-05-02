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

Route.get('/orders', 'CustomerOrderController.index').middleware('auth');
Route.post('/orders', 'CustomerOrderController.store').middleware('auth');
Route.get('/orders/:id', 'CustomerOrderController.show').middleware('auth');
Route.put('/orders/:id', 'CustomerOrderController.update').middleware('auth');

Route.get('/addresses', 'AddressController.index').middleware('auth');
Route.post('/addresses', 'AddressController.store').middleware('auth');
Route.get('/addresses/:code', 'AddressController.show').middleware('auth');
Route.put('/addresses/:code', 'AddressController.update').middleware('auth');
Route.delete('/addresses/:code', 'AddressController.destroy').middleware(
	'auth'
);
