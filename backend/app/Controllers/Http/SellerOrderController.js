'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('App/Models/Order');
const User = use('App/Models/User');
const Address = use('App/Models/Address');

class SellerOrderController {
	async index({ auth, response }) {
		const { user: seller } = auth;

		// adicionar _checkSeller

		const sellerOrders = await Order.query()
			.where('seller_id', '=', seller.id)
			.fetch();

		return response.send(await this._orderToJson(sellerOrders));
	}

	async show({ auth, params, response }) {
		const { user: seller } = auth;

		// adicionar _checkSeller

		const order = await this._getSellerOrder(params.id, seller.id);

		response.send(await this._orderToJson(order));
	}

	/* Não faz atualização de endereço */
	async update({ auth, params, request, response }) {
		const { user: seller } = auth;

		// adicionar _checkSeller

		const data = request.only([
			'estimatedDelivery',
			'deliveryCost',
			'deliveryMethod',
			'status',
		]);

		const order = await Order.findOrFail(params.id);

		order.merge({ ...data });
		await order.save();

		response.send(await this._orderToJson(order));
	}

	_checkSeller(user, response) {
		if (!user.isSeller) {
			response.status(401);
		}
	}

	async _getSellerOrder(orderId, sellerId) {
		return await Order.query()
			.where('id', '=', orderId)
			.where('seller_id', '=', sellerId)
			.fetch();
	}

	async _orderToJson(orderSerializer) {
		const jsonSerializer = orderSerializer.toJSON();
		try {
			for (const order of jsonSerializer) {
				order.customer_id = await User.findOrFail(order.customer_id);
				order.seller_id = await User.findOrFail(order.seller_id);

				order.delivery_address_id = await Address.findOrFail(
					order.delivery_address_id
				);
				order.billing_address_id = await Address.findOrFail(
					order.billing_address_id
				);
			}
		} catch (TypeError) {
			jsonSerializer.customer_id = await User.findOrFail(
				jsonSerializer.customer_id
			);
			jsonSerializer.seller_id = await User.findOrFail(
				jsonSerializer.seller_id
			);

			jsonSerializer.delivery_address_id = await Address.findOrFail(
				jsonSerializer.delivery_address_id
			);
			jsonSerializer.billing_address_id = await Address.findOrFail(
				jsonSerializer.billing_address_id
			);
		}

		return jsonSerializer;
	}
}

module.exports = SellerOrderController;
