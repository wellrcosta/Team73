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
			.fetch();

		return response.send(await this._addressToJson(userAddresses));
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

		response.send(await this._addressToJson(newAddress));
	}

	async show({ params, response }) {
		const address = await Address.findOrFail(params.id);

		response.send(await this._addressToJson(address));
	}

	/* TODO: Testing */
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
		response.send(await this._addressToJson(address));
	}

	async destroy({ auth, params, response }) {
		const { id } = auth.user;

		const address = await Address.findOrFail(params.id);
		await address.delete();

		response.status(200);
	}

	async _addressToJson(addressSerializer) {
		const jsonSerializer = addressSerializer.toJSON();

		try {
			for (const address of jsonSerializer) {
				address.user_id = await User.findOrFail(address.user_id);
			}
		} catch (TypeError) {
			jsonSerializer.user_id = await User.findOrFail(jsonSerializer.user_id);
		}

		return jsonSerializer;
	}
}

module.exports = AddressController;
