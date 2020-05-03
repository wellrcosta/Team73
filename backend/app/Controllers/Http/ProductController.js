'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Products = use('App/Models/Product');
class ProductController {
	async index({ request, response }) {
		let {
			status = '1',
			category = null,
			page = 1,
			per_page = '5',
		} = request.get();
		let data = [];

		if (category !== null) {
			data = await Products.query()
				.where('status', '=', !!parseInt(status))
				.with('category')
				.where('category', '=', category)
				.limit(per_page)
				.offset(per_page * page - per_page)
				.fetch();
		} else {
			data = await Products.query()
				.where('status', '=', !!parseInt(status))
				.with('category')
				.limit(per_page)
				.offset(per_page * page - per_page)
				.fetch();
		}

		return data;
	}

	async store({ auth, request, response }) {
		const { id } = auth.user;

		const { category, ...data } = request.only([
			'name',
			'description',
			'status',
			'price',
			'brand',
			'category',
		]);

		const product = await Products.create({ ...data, user_id: id });

		if (category && category.length > 0) {
			await product.category().attach(category);
			await product.load('category');
		}

		return product;
	}

	async show({ params, request, response }) {
		const data = await Products.findOrFail(params.id);

		await data.load('images');

		return data;
	}

	async update({ auth, params, request, response }) {
		const { id } = auth.user;

		const product = await Products.findOrFail(params.id);

		const { category, ...data } = request.only([
			'name',
			'description',
			'status',
			'price',
			'brand',
			'category',
		]);

		product.merge(data);

		await product.save();

		if (category && category.length > 0) {
			await product.category().sync(category);
			await product.load('category');
		}

		return product;
	}

	async destroy({ params, request, response }) {
		const { id } = auth.user;

		const product = await Products.findOrFail(params.id);

		if (id !== product.user_id) {
			return response.status(401);
		}

		await product.delete();
		return response.status(200);
	}
}

module.exports = ProductController;
