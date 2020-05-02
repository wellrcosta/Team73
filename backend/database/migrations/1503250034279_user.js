'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.create('users', (table) => {
			table.increments();
			table.string('username').notNullable().unique();
			table.string('email').notNullable().unique();
			table.string('password').notNullable();

			table
				.integer('delivery_address_id')
				.unsigned()
				.references('id')
				.inTable('users');

			table
				.integer('billing_address_id')
				.unsigned()
				.references('id')
				.inTable('users');

			table.string('identification').notNullable();
			table.boolean('isSeller').defaultTo(false);
			table.boolean('makeDeliveries').defaultTo(false);
			table.integer('score').defaultTo(0);
			table.string('range');
			table.timestamps();
		});
	}

	down() {
		this.drop('users');
	}
}

module.exports = UserSchema;
