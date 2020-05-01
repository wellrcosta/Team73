'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up() {
    this.create('addresses', (table) => {
      table.increments()

      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table.string('zipCode').notNullable();
      table.string('street').notNullable();
      table.string('city').notNullable();
      table.string('neighborhood').notNullable();
      table.string('complement').notNullable();
      table.string('reference').notNullable();
      table.string('state', 2).notNullable();

      table.string('guid').notNullable().unique();

      table.timestamps()
    })
  }

  down() {
    this.drop('addresses')
  }
}

module.exports = AddressSchema