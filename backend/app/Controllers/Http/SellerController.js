'use strict';

const User = use('App/Models/User');
const Database = use('Database');

class SellerController {
	async index() {
		const sellers = User.all();

		return sellers;
	}

	async create({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'zipCode',
			'address',
			'identification',
			'isSeller',
			'makeDeliveries',
			'points',
			'range',
			'logitude',
			'latitude',
		]);
		const seller = await User.create(data);

		return seller;
	}

	async update({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'zipCode',
			'address',
			'identification',
			'isSeller',
			'makeDeliveries',
			'points',
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

module.exports = SellerController;
