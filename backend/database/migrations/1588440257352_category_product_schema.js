'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CategoryProductSchema extends Schema {
	up() {
		this.create('category_product', (table) => {
			table.increments();
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
			table.timestamps();
		});
	}

	down() {
		this.drop('category_product');
	}
}

module.exports = CategoryProductSchema;
