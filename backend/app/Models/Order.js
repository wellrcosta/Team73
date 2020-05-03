'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Order extends Model {
	static get hidden() {
		return [
			'customer_id',
			'seller_id',
			'delivery_address_id',
			'billing_address_id',
		];
	}

	items() {
		return this.hasMany('App/Models/OrderItem', 'order_id', 'id');
	}

	deliveryAddress() {
		return this.hasOne('App/Models/Address', 'delivery_address_id', 'id');
	}

	billingAddress() {
		return this.hasOne('App/Models/Address', 'billing_address_id', 'id');
	}

	customer() {
		return this.hasOne('App/Models/User', 'customer_id', 'id');
	}

	seller() {
		return this.hasOne('App/Models/User', 'seller_id', 'id');
	}
}

module.exports = Order;
