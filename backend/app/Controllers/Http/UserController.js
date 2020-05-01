'use strict';

const User = use('App/Models/User');
const Database = use('Database');

class UserController {
	async create({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'zipCode',
			'address',
			'identification',
			'range',
			'logitude',
			'latitude',
		]);
		const user = await User.create(data);

		return user;
	}

	async update({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'zipCode',
			'address',
			'identification',
			'range',
			'logitude',
			'latitude',
		]);

		const response = await Database.table('users')
			.where('email', '=', data.email)
			.update(data);

		return response;
	}

	async delete({ request }) {
		const { email } = request.all();

		const response = await Database.table('users')
			.where('email', '=', email)
			.delete();

		return response;
	}
}

module.exports = UserController;
