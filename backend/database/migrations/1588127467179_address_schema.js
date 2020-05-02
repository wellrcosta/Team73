'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressSchema extends Schema {
	up() {
		this.create('addresses', (table) => {
			table.increments();

			table
				.integer('user_id')
				.unsigned()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

			table.string('number').default('0');
			table.string('zipcode', 8).notNullable();
			table.string('street').notNullable();
			table.string('city').notNullable();
			table.string('neighborhood').notNullable();
			table.string('complement');
			table.string('reference');
			table.string('state', 2).notNullable();

			table.timestamps();
		});
	}

	down() {
		this.drop('addresses');
	}
}

module.exports = AddressSchema;
