'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Category = use('App/Models/Category');

/**
 * Resourceful controller for interacting with category
 */
class CategoryController {
	async index({ request, response }) {
		const data = Category.all();

		return data;
	}

	async store({ request }) {
		const data = request.only(['name']);

		const category = await Category.create(data);

		return category;
	}

	async destroy({ params, request, response }) {
		const category = await Category.findOrFail(params.id);

		await category.delete();

		return response.status(200);
	}
}

module.exports = CategoryController;
