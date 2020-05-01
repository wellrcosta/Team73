'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.create('users', (table) => {
			table.increments();
			table.string('username', 80).notNullable().unique();
			table.string('email', 254).notNullable().unique();
			table.string('password', 60).notNullable();
			table.string('zipCode', 60).notNullable();
			table.string('address', 150).notNullable();
			table.string('identification', 18).notNullable();
			table.boolean('isSeller').notNullable().defaultTo(false);
			table.boolean('makeDeliveries').notNullable().defaultTo(false);
			table.integer('points').notNullable().defaultTo(0);
			table.string('range', 250).notNullable();
			table.string('logitude', 250).notNullable();
			table.string('latitude', 250).notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('users');
	}
}

module.exports = UserSchema;
