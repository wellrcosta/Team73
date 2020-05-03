'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class User extends Model {
<<<<<<< HEAD
=======
	static get hidden() {
		return ['password', 'delivery_address_id', 'billing_address_id'];
	}

	defaultDeliveryAddress() {
		return this.hasOne('App/Models/Address');
	}

	defaultBillingAddress() {
		return this.hasOne('App/Models/Address');
	}

>>>>>>> 5718e6c60fbbae5fad73a782b73e21a803c19e40
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

<<<<<<< HEAD
	tokens() {
		return this.hasMany('App/Models/Token');
	}
	products() {
		return this.hasMany('App/Models/Product');
	}
=======
	/**
	 * A relationship on tokens is required for auth to
	 * work. Since features like `refreshTokens` or
	 * `rememberToken` will be saved inside the
	 * tokens table.
	 *
	 * @method tokens
	 *
	 * @return {Object}
	 */
	tokens() {
		return this.hasMany('App/Models/Token');
	}
>>>>>>> 5718e6c60fbbae5fad73a782b73e21a803c19e40
}

module.exports = User;
