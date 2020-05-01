'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Address = use('app/Models/Address');
import {
  nanoid
} from 'nanoid';

class AddressController {

  /* TODO: Testing */
  async index({
    auth,
    response,
  }) {
    const {
      user
    } = auth.user;

    const userAddresses = await Address
      .query()
      .where('user_id', '=', user.id)
      .fetch();

    return response.send(userAddresses.toJSON());
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
      'zipCode',
      'street',
      'city',
      'neighborhood',
      'complement',
      'reference',
      'state',
    ]);

    const newAddress = new Address()
    newAddress.zipCode = data.zipCode;
    newAddress.street = data.street;
    newAddress.city = data.city;
    newAddress.neighborhood = data.neighborhood;
    newAddress.complement = data.complement;
    newAddress.reference = data.reference;
    newAddress.state = data.state;

    newAddress.userId = user.id;
    newAddress.guid = nanoid();

    newAddress.save();

    response.send(newAddress.toJSON());
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
      await this._getUserAddress(params.guid, user.id).toJSON()
    );
  }

  /* TODO: Testing */
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
      'zipCode',
      'street',
      'city',
      'neighborhood',
      'complement',
      'reference',
      'state'
    ])

    const address = await this._getUserAddress(params.guid, user.id);

    address.merge({
      zipCode: data.zipCode || address.zipCode,
      street: data.street || address.street,
      city: data.city || address.city,
      neighborhood: data.neighborhood || address.neighborhood,
      complement: data.complement || address.complement,
      reference: data.reference || address.reference,
      state: data.state || address.state,
    })

    address.save();
    response.send(address.toJSON());
  }

  async destroy({
    params,
    request,
    response
  }) {}

  /* TODO: Testing */
  async _getUserAddress(guid, userId) {
    return await Address
      .query()
      .where('guid', '=', guid)
      .where('user_id', '=', userId)
      .fetch()
  }
}

export default AddressController