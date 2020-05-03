'use strict';

const User = use('App/Models/User');

class CustomerController {
	async store({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'phone_number',
			'identification',
			'range',
			'first_name',
			'last_name',
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
			'phone_number',
			'delivery_address_id',
			'billing_address_id',
			'identification',
			'range',
			'first_name',
			'last_name',
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
