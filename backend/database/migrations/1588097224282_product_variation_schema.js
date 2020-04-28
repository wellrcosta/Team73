'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductVariationSchema extends Schema {
	up() {
		this.create('product_variations', (table) => {
			table.increments();
			table.string('name').notNullable();
			table.bigInteger('qty').defaultTo(0);
			table.timestamps();
			table
				.string('product_id')
				.references('name')
				.inTable('products')
				.onUpdate('CASCADE');
		});
	}

	down() {
		this.drop('product_variations');
	}
}

module.exports = ProductVariationSchema;
