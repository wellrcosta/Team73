'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('App/Models/Order');
const Address = use('App/Models/Address');

class CustomerOrderController {
	/* TODO: Testing */
	async index({ auth, response }) {
		const { id } = auth.user;

		const customerOrders = await Order.query()
			.where('customer_id', '=', id)
			.fetch();

		return response.send(customerOrders.toJSON());
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

		response.send(order.toJSON());
	}

	async show({ auth, params, response }) {
		const { id } = auth.user;

		response.send(await this._getUserOrder(params.id, id));
	}

	/* TODO: Testing and complete controller */
	async update({ auth, params, request, response }) {
		const { id } = auth.user;

		const data = request.only([
			'estimatedDelivery',
			'deliveryCost',
			'deliveryMethod',
			'deliveryAddress',
			'billingAddress',
			'status',
		]);

		const order = await this._getUserOrder(params.id, id);

		// if deliveryAddress
		// if billingAddress

		order.merge({ ...data });

		order.save();
		response.send(order.toJSON());
	}

	/* TODO: Testing */
	async _getUserOrder(id, userId) {
		return await Order.query()
			.where('id', '=', id)
			.where('customer_id', '=', userId)
			.fetch();
	}
}

module.exports = CustomerOrderController;
