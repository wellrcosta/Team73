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
		greeting: 'Hello world in JSON'
	};
});
Route.post('/populate', 'Populate.Do');

Route.post('/users', 'UserController.create');

Route.post('/sessions', 'SessionController.create');

Route.post('/orders', 'CustomerOrderController.store');
Route.get('/orders', 'CustomerOrderController.index');
Route.get('/orders/:code', 'CustomerOrderController.show');
Route.put('/orders/:code', 'CustomerOrderController.update');

Route.post('/orders', 'CustomerOrderController.store');
Route.get('/orders', 'CustomerOrderController.index');
Route.get('/orders/:code', 'CustomerOrderController.show');
Route.put('/orders/:code', 'CustomerOrderController.update');