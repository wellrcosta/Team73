import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Products extends BaseSchema {
	protected tableName = 'products';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary();
			table.string('name').notNullable();
			table.string('description', 500).notNullable();
			table.boolean('status').defaultTo(true);
			table.bigInteger('price').notNullable();
			table.string('brand');
			table
				.string('user_id')
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('SET NULL');
			table.timestamps(true);
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
