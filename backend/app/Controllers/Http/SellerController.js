'use strict';

const User = use('App/Models/User');

class SellerController {
	async store({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'phone_number',
			'billing_address_id',
			'identification',
			'isSeller',
			'makeDeliveries',
			'score',
			'range',
			'first_name',
			'last_name',
		]);

		const seller = await User.create(data);

		return seller;
	}

	async update({ params, request }) {
		const seller = await User.findOrFail(params.id);

		const data = request.only([
			'username',
			'email',
			'password',
			'phone_number',
			'billing_address_id',
			'identification',
			'makeDeliveries',
			'score',
			'range',
			'first_name',
			'last_name',
		]);

		await seller.merge(data);
		await seller.save();

		return seller;
	}

	async destroy({ params }) {
		const seller = await User.findOrFail(params.id);

		await seller.delete();
	}
}

module.exports = SellerController;
