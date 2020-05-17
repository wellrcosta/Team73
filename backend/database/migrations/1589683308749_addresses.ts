import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Addresses extends BaseSchema {
	protected tableName = 'addresses';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary();
			table
				.integer('user_id')
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

			table.string('number').defaultTo('0');
			table.string('zipcode', 8).notNullable();
			table.string('street').notNullable();
			table.string('city').notNullable();
			table.string('neighborhood').notNullable();
			table.string('complement');
			table.string('reference');
			table.string('state', 2).notNullable();
			table.timestamps(true);
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
