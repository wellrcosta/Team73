'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('App/Models/Order');

class SellerOrderController {
	async index({ auth, response }) {
		const { user: seller } = auth;

		const sellerOrders = await Order.query()
			.where({ seller_id: seller.id })
			.with('deliveryAddress')
			.with('billingAddress')
			.with('customer')
			.with('seller')
			.fetch();

		return response.send(sellerOrders.toJSON());
	}

	async show({ auth, params, response }) {
		const { user: seller } = auth;

		const sellerOrder = await Order.query()
			.where({ id: params.id, seller_id: seller.id })
			.with('deliveryAddress')
			.with('billingAddress')
			.with('customer')
			.with('seller')
			.first();

		response.send(sellerOrder.toJSON());
	}

	/* Não faz atualização de endereço */
	async update({ auth, params, request, response }) {
		const { user: seller } = auth;

		const data = request.only([
			'estimatedDelivery',
			'deliveryCost',
			'deliveryMethod',
			'status',
		]);

		const sellerOrder = await Order.query()
			.where({ id: params.id, seller_id: seller.id })
			.with('deliveryAddress')
			.with('billingAddress')
			.with('customer')
			.with('seller')
			.first();

		sellerOrder.merge({ ...data });
		await sellerOrder.save();

		response.send(sellerOrder.toJSON());
	}
}

module.exports = SellerOrderController;
