'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {
    items() {
        return this.hasMany('App/Models/Product')
    }
}

module.exports = OrderItem