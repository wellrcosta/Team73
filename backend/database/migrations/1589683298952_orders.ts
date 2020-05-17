import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Orders extends BaseSchema {
	protected tableName = 'orders';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary();
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

			table.dateTime('estimated_delivery').notNullable();
			table.integer('total_products');
			table.float('delivery_cost');
			table.enum('delivery_method', ['seller_home', 'customer_store'], {
				useNative: true,
				enumName: 'delivery_methods_type',
			});

			table.enum(
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
			table.timestamps(true);
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
