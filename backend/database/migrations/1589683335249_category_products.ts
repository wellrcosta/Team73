import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CategoryProducts extends BaseSchema {
	protected tableName = 'category_products';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id').primary();
			table
				.integer('product_id')
				.unsigned()
				.references('product.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE')
				.index('product_id');
			table
				.integer('category_id')
				.unsigned()
				.references('category.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE')
				.index('category_id');
			table.timestamps(true);
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
