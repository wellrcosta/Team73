'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Products = use('App/Models/Product');
class ProductController {
	async index({ request, response }) {
		const data = await Products.all();

		return data;
	}

	async store({ request, response }) {}

	async show({ params, request, response }) {}

	async update({ params, request, response }) {}

	async destroy({ params, request, response }) {}
}

module.exports = ProductController;
