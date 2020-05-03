'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CategorySchema extends Schema {
	up() {
		this.create('category', (table) => {
			table.increments();
			table.string('name').notNullable().unique();
			table.timestamps();
		});
	}

	down() {
		this.drop('category');
	}
}

module.exports = CategorySchema;
