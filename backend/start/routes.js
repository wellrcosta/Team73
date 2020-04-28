'use strict';
import Populate from '../utils/populateDatabase';

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
Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
