'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Address = use('App/Models/Address');
const User = use('App/Models/User');

class AddressController {
	async index({ auth, response }) {
		const { id } = auth.user;

		const userAddresses = await Address.query()
			.where('user_id', '=', id)
			.with('user.defaultDeliveryAddress')
			.with('user.defaultBillingAddress')
			.fetch();

		return response.send(userAddresses.toJSON());
	}

	async store({ auth, request, response }) {
		const { id: user_id } = auth.user;

		const data = request.only([
			'zipcode',
			'street',
			'city',
			'neighborhood',
			'complement',
			'reference',
			'state',
			'number',
		]);

		const newAddress = await Address.create({ ...data, user_id });
		await newAddress.load('user');

		response.send(newAddress.toJSON());
	}

	async show({ params, response }) {
		const address = await Address.findOrFail(params.id);
		await address.load('user');

		response.send(address.toJSON());
	}

	async update({ params, request, response }) {
		const data = request.only([
			'zipcode',
			'street',
			'city',
			'neighborhood',
			'complement',
			'reference',
			'state',
			'number',
		]);

		const address = await Address.findOrFail(params.id);

		address.merge({ ...data });

		await address.save();
		await address.load('user');

		response.send(address.toJSON());
	}

	async destroy({ params, response }) {
		const address = await Address.findOrFail(params.id);
		await address.delete();

		response.status(200).send();
	}
}

module.exports = AddressController;
