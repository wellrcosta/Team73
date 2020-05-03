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
