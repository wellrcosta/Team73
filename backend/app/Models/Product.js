'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
	variations() {
		return this.hasMany('App/Models/ProductVariation');
	}
	category() {
		return this.hasMany('App/Models/ProductCategory');
	}
	user() {
		return this.belongsTo('App/Models/User');
	}

	images() {
		return this.hasMany('App/Models/ImageProduct');
	}
}

module.exports = Product;
