'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
	up() {
		this.create('products', (table) => {
			table.increments();
			table.string('name').notNullable().unique();
			table.string('description').notNullable();
			table.boolean('status').defaultTo(true);
			table.bigInteger('price').notNullable();
			table.string('brand');
			table.timestamps();
			table
				.string('user_id')
				.references('username')
				.inTable('users')
				.onUpdate('CASCADE');
		});
	}

	down() {
		this.drop('products');
	}
}

module.exports = ProductSchema;
