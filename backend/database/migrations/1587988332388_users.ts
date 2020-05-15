import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UsersSchema extends BaseSchema {
	protected tableName = 'users';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary();
			table.string('email', 255).notNullable();
			table.string('password', 180).notNullable();
			table.string('remember_me_token').nullable();
			table
				.integer('delivery_address_id')
				.unsigned()
				.references('id')
				.inTable('users');

			table
				.integer('billing_address_id')
				.unsigned()
				.references('id')
				.inTable('users');
			table.string('identification').notNullable();
			table.boolean('isSeller').defaultTo(false);
			table.boolean('makeDeliveries').defaultTo(false);
			table.integer('score').defaultTo(0);
			table.float('range').defaultTo(0);
			table.timestamps(true);
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
