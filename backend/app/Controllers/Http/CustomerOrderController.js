'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('App/Models/Order');
const User = use('App/Models/User');
const Address = use('App/Models/Address');

class CustomerOrderController {
	/* TODO: Testing */
	async index({ auth, response }) {
		const { id } = auth.user;

		const customerOrders = await Order.query()
			.where('customer_id', '=', id)
			.fetch();

		return response.send(await this._orderToJson(customerOrders));
	}

	async store({ auth, request, response }) {
		const { user } = auth;

		const data = request.only([
			'seller_id',
			'estimated_delivery',
			'delivery_cost',
			'delivery_method',
		]);

		const {
			use_default_billing_address: useDefaultBillingAddress,
		} = request.only(['use_default_billing_address']);

		const {
			use_default_delivery_address: useDefaultDeliveryAddress,
		} = request.only(['use_default_delivery_address']);

		const { new_billing_address: newBillingAddress } = request.only([
			'new_billing_address',
		]);

		const { new_delivery_address: newDeliveryAddress } = request.only([
			'new_delivery_address',
		]);

		if (!useDefaultBillingAddress) {
			const billingAddress = await Address.create({
				...newBillingAddress,
				user_id: user.id,
			});
			data.billing_address_id = billingAddress.id;
		} else {
			data.billing_address_id = user.default_billing_address_id;
		}

		if (!useDefaultDeliveryAddress) {
			const deliveryAddress = await Address.create({
				...newDeliveryAddress,
				user_id: user.id,
			});
			data.delivery_address_id = deliveryAddress.id;
		} else {
			data.delivery_address_id = user.default_delivery_address_id;
		}

		const order = await Order.create({
			...data,
			customer_id: user.id,
			status: 'pending',
		});

		response.send(await this._orderToJson(order));
	}

	async show({ auth, params, response }) {
		const { id } = auth.user;
		const order = await this._getUserOrder(params.id, id);

		response.send(await this._orderToJson(order));
	}

	/* TODO: Testing and complete controller */
	async update({ auth, params, request, response }) {
		const { id } = auth.user;

		const data = request.only([
			'estimatedDelivery',
			'deliveryCost',
			'deliveryMethod',
			'status',
		]);

		const order = await this._getUserOrder(params.id, id);

		order.merge({ ...data });
		await order.save();

		response.send(await this._orderToJson(order));
	}

	async _getUserOrder(id, userId) {
		return await Order.query()
			.where('id', '=', id)
			.where('customer_id', '=', userId)
			.fetch();
	}

	async _orderToJson(orderSerializer) {
		const jsonSerializer = orderSerializer.toJSON();

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

		return jsonSerializer;
	}
}

module.exports = CustomerOrderController;
