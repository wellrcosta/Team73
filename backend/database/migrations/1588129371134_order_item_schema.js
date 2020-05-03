'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemSchema extends Schema {
  up() {
    this.create('order_items', (table) => {
      table.increments()

      table.integer('amount')

      table.timestamps()
    })
  }

  down() {
    this.drop('order_items')
  }
}

module.exports = OrderItemSchema