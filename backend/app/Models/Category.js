'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Category extends Model {
	product() {
		this.belongsToMany('App/Model/Product');
	}
}

module.exports = Category;
