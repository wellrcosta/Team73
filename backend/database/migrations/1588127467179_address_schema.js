'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up() {
    this.create('addresses', (table) => {
      table.increments()

      table
        .integer('customer_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('address').notNullable()
      table.string('state', 2).notNullable()
      table.string('city').notNullable()
      table.string('neighborhood').notNullable()
      table.string('complement').notNullable()
      table.string('reference').notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('addresses')
  }
}

module.exports = AddressSchema