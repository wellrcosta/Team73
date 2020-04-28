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
Route.resource('/products', 'ProductController').apiOnly().middleware('auth');
