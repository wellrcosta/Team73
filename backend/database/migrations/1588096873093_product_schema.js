'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
	up() {
		this.create('product', (table) => {
			table.increments();
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
			table.timestamps();
		});
	}

	down() {
		this.drop('product');
	}
}

module.exports = ProductSchema;
