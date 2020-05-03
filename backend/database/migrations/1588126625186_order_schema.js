'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class OrderSchema extends Schema {
	up() {
		this.create('orders', (table) => {
			table.increments();

			table
				.integer('customer_id')
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('SET NULL');

			table
				.integer('seller_id')
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('SET NULL');

			table
				.integer('delivery_address_id')
				.unsigned()
				.references('id')
				.inTable('addresses')
				.onUpdate('CASCADE')
				.onDelete('SET NULL');

			table
				.integer('billing_address_id')
				.unsigned()
				.references('id')
				.inTable('addresses')
				.onUpdate('CASCADE')
				.onDelete('SET NULL');

			table.datetime('estimated_delivery').notNullable();
			table.integer('total_products');
			table.float('delivery_cost');

			table.enu('delivery_method', ['seller_home', 'customer_store'], {
				useNative: true,
				enumName: 'delivery_methods_type',
			});

			table.enu(
				'status',
				[
					'pending',
					'approved',
					'nf_generated',
					'sent',
					'delivered',
					'cancelled',
				],
				{
					useNative: true,
					enumName: 'order_status_type',
				}
			);

			table.timestamps();
		});
	}

	down() {
		this.drop('orders');
	}
}

module.exports = OrderSchema;
