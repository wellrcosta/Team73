'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
	return { greeting: 'Hello world in JSON' };
});
Route.post('/populate', 'Populate.Do');
Route.post('/sessions', 'SessionController.create');
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
