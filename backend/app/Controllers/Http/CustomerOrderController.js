'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('app/Models/Order');

class CustomerOrderController {
  /* TODO: Testing */
  async index({
    auth,
    response
  }) {
    const {
      user
    } = auth.user;

    const customerOrders = await Order
      .query()
      .where('customer_id', '=', user.id)
      .fetch();

    return response.send(customerOrders.toJSON());
  }

  /* TODO: Testing */
  async store({
    auth,
    request,
    response
  }) {
    const {
      user
    } = auth.user;

    const data = request.only([
      'estimatedDelivery',
      'totalProducts',
      'deliveryCost',
      'deliveryMethod',
      'useDefaultDeliveryAddress',
      'useDefaultBillingAddress',
      'newDeliveryAddress',
      'newBillingAddress'
    ]);

    const newOrder = new Order()
    newOrder.estimatedDelivery = data.estimatedDelivery;
    newOrder.totalProducts = data.totalProducts;
    newOrder.deliveryCost = data.deliveryCost;
    newOrder.deliveryMethod = data.deliveryMethod;

    newOrder.deliveryAddressId = this._useDefaultOrSaveAddress(
      data.useDefaultDeliveryAddress,
      user,
      data.newDeliveryAddress
    );

    newOrder.billingAddressId = this._useDefaultOrSaveAddress(
      data.useDefaultBillingAddress,
      user,
      data.newBillingAddress
    );

    newOrder.placedAt = Date.now();
    newOrder.updatedAt = Date.now();

    newOrder.status = 'pending';

    newOrder.save();

    response.send(newOrder.toJSON());
  }

  /* TODO: Testing */
  async show({
    auth,
    params,
    response
  }) {
    const {
      user
    } = auth.user;

    response.send(
      await this._getUserOrder(params.code, user.id).toJSON()
    );
  }

  /* TODO: Testing and complete controller */
  async update({
    auth,
    params,
    request,
    response
  }) {
    const {
      user
    } = auth.user;

    const data = request.only([
      'estimatedDelivery',
      'deliveryCost',
      'deliveryMethod',
      'deliveryAddress',
      'billingAddress',
      'status'
    ])

    const order = await this._getUserOrder(params.code, user.id);

    // if deliveryAddress
    // if billingAddress


    order.merge({
      updateAt: Date.now(),
      estimatedDelivery: data.estimatedDelivery || order.estimatedDelivery,
      deliveryMethod: data.deliveryMethod || order.deliveryMethod,
      status: data.status || order.status,
    })

    order.save();
    response.send(order.toJSON());
  }

  /* TODO: Testing */
  async _getUserOrder(code, userId) {
    return await Order
      .query()
      .where('code', '=', code)
      .where('customer_id', '=', userId)
      .fetch()
  }

  /* TODO: Testing */
  _useDefaultOrSaveAddress(useDefault, user, addressData) {
    if (useDefault) {
      return user.defaultDeliveryAddress.id;
    }

    const newAddress = new Address();
    newAddress.user_id = user.id;
    newAddress.zipCode = addressData.zipCode;
    newAddress.street = addressData.street;
    newAddress.city = addressData.city;
    newAddress.neighborhood = addressData.neighborhood;
    newAddress.complement = addressData.complement;
    newAddress.reference = addressData.reference;
    newAddress.state = addressData.state;

    newAddress.save();

    return newAddress.id;
  }
}

module.exports = CustomerOrderController