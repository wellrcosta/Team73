'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ImageProductsSchema extends Schema {
	up() {
		this.create('image_products', (table) => {
			table.increments();
			table
				.integer('product_id')
				.unsigned()
				.references('name')
				.inTable('products')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.string('path').notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('image_products');
	}
}

module.exports = ImageProductsSchema;
