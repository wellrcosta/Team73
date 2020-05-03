'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Config = use('Config');

const Order = use('App/Models/Order');
const User = use('App/Models/User');
const Address = use('App/Models/Address');

const SmsController = use('App/Controllers/Http/SmsController');
const smsSender = new SmsController();

const newOrderSms = Config.get('strings.newOrderSms');
const updateOrderSms = Config.get('strings.updateOrderSms');

class CustomerOrderController {
	async index({ auth, response }) {
		const { id } = auth.user;

		const customerOrders = await Order.query()
			.where({ customer_id: id })
			.with('deliveryAddress')
			.with('billingAddress')
			.with('customer')
			.with('seller')
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

		// Esse trecho precisa de uma refatoração séria
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

		await smsSender.send(
			user.phone_number,
			newOrderSms(user.first_name, order.id)
		);

		response.send(order.toJSON());
	}

	async show({ auth, params, response }) {
		const { id } = auth.user;

		const customerOrder = await Order.query()
			.where({ id: params.id, customer_id: id })
			.with('deliveryAddress')
			.with('billingAddress')
			.with('customer')
			.with('seller')
			.fetch();

		response.send(customerOrder.toJSON());
	}

	/* Não faz atualização de endereço */
	async update({ auth, params, request, response }) {
		const { user } = auth;

		const data = request.only([
			'estimatedDelivery',
			'deliveryCost',
			'deliveryMethod',
			'status',
		]);

		const order = await Order.query()
			.where({ id: params.id, customer_id: user.id })
			.with('deliveryAddress')
			.with('billingAddress')
			.with('customer')
			.with('seller')
			.first();

		if (!order) {
			return response.status(404).send('Not found');
		}

		order.merge({ ...data });
		await order.save();

		let parsedStatus = '';
		switch (order.status) {
			case 'pending':
				parsedStatus = 'Pendente';
				break;
			case 'approved':
				parsedStatus = 'Aprovado';
				break;
			case 'nf_generated':
				parsedStatus = 'Geração de Nota Fiscal';
				break;
			case 'sent':
				parsedStatus = 'Enviado';
				break;
			case 'delivered':
				parsedStatus = 'Entregue';
				break;
			case 'cancelled':
				parsedStatus = 'Cancelado';
				break;
			default:
				parsedStatus = 'Desconhecido';
		}

		await smsSender.send(
			user.phone_number,
			updateOrderSms(user.first_name, order.id, parsedStatus)
		);

		response.send(order.toJSON());
	}
}

module.exports = CustomerOrderController;
