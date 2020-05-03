'use strict';

const User = use('App/Models/User');

class CustomerController {
	async store({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'delivery_address_id',
			'billing_address_id',
			'identification',
			'range',
		]);

		const customer = await User.create(data);

		return customer;
	}

	async update({ params, request }) {
		const customer = await User.findOrFail(params.id);

		const data = request.only([
			'username',
			'email',
			'password',
			'delivery_address_id',
			'billing_address_id',
			'identification',
			'range',
		]);

		customer.merge(data);
		await customer.save();

		return customer;
	}

	async destroy({ params }) {
		const customer = await User.findOrFail(params.id);

		await customer.delete();

		return customer;
	}
}

module.exports = CustomerController;
