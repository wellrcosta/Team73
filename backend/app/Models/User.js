'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class User extends Model {
	static get hidden() {
		return ['password', 'delivery_address_id', 'billing_address_id'];
	}

	defaultDeliveryAddress() {
		return this.hasOne('App/Models/Address');
	}

	defaultBillingAddress() {
		return this.hasOne('App/Models/Address');
	}
	static boot() {
		super.boot();

		/**
		 * A hook to hash the user password before saving
		 * it to the database.
		 */
		this.addHook('beforeSave', async (userInstance) => {
			if (userInstance.dirty.password) {
				userInstance.password = await Hash.make(userInstance.password);
			}
		});
	}
	tokens() {
		return this.hasMany('App/Models/Token');
	}
	products() {
		return this.hasMany('App/Models/Product');
	}
}

module.exports = User;
