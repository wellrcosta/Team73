'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    items() {
        return this.hasMany('App/Models/OrderItem')
    }

    deliveryAddress() {
        return this.hasOne('App/Models/Address');
    }

    billingAddress() {
        return this.hasOne('App/Models/Address');
    }

    customer() {
        return this.hasOne('App/Models/User');
    }

    seller() {
        return this.hasOne('App/Models/User');
    }
}

module.exports = Order