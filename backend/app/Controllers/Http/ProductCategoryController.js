'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with productcategories
 */
class ProductCategoryController {
	async index({ request, response }) {}

	async store({ request, response }) {}

	async show({ params, request, response }) {}

	async update({ params, request, response }) {}

	async destroy({ params, request, response }) {}
}

module.exports = ProductCategoryController;
