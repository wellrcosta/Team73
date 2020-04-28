'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Products = use('App/Models/Product');
class ProductController {
	async index({ request, response }) {
		const data = await Products.all();

		return data;
	}

	async store({ auth, request, response }) {
		const { id } = auth.user;

		const data = request.only([
			'name',
			'description',
			'status',
			'price',
			'brand',
			'category',
		]);

		const product = await Products.create({ ...data, user_id: id });

		return product;
	}

	async show({ params, request, response }) {
		const data = await Products.findOrFail(params.id);

		await data.load('images');

		return data;
	}

	async update({ params, request, response }) {}

	async destroy({ params, request, response }) {}
}

module.exports = ProductController;
