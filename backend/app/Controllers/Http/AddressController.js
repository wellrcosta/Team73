'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Address = use('app/Models/Address');

class AddressController {

  async index({
    auth,
    request,
    response,
    view
  }) {
    const {
      user
    } = auth.user;

    const userAddresses = await Address
      .query()
      .where('customer_id', '=', user.id)
      .fetch();

    return response.send(customerOrders.toJSON());
  }

  async store({
    request,
    response
  }) {}

  async show({
    params,
    request,
    response,
    view
  }) {}

  async update({
    params,
    request,
    response
  }) {}

  async destroy({
    params,
    request,
    response
  }) {}
}

module.exports = AddressController