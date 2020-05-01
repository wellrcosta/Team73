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

Route.post('/user/create', 'UserController.create');
Route.put('/user/update', 'UserController.update');
Route.delete('/user/delete', 'UserController.delete');

Route.get('/seller/index', 'SellerController.index');
Route.post('/seller/create', 'SellerController.create');
Route.put('/seller/update', 'SellerController.update');
Route.delete('/seller/delete', 'SellerController.delete');

Route.post('/sessions', 'SessionController.create');
