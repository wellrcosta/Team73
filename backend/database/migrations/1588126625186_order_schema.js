'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()

      table.increments('code').notNullable().unique()
      table.datetime('placed_at').notNullable()
      table.datetime('uploaded_at').notNullable()
      table.datetime('estimated_delivery').notNullable()
      table.integer('total_ordered')
      table.specificType('shipping_cost', 'money')

      table.enu('shipping_method', [
        'tipos aqui' // TODO: inserir os valores possíveis
      ], {
        useNative: true,
        enumName: 'shipping_methods_type'
      })

      table
        .integer('shipping_address_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('SET_NULL')

      table
        .integer('billing_address_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('SET_NULL')

      table
        .integer('customer_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('customers')
        .onDelete('SET_NULL')

      table.enu('status', [
        'approved',
        'nf_generated',
        'pending',
        'cancelled',
        'delivered',
        'sent',
      ], {
        useNative: true,
        enumName: 'order_status_type'
      })

      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema