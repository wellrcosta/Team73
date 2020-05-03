'use strict';

const Helpers = use('Helpers');
const Product = use('App/Models/Product');

class ImageProductController extends Model {
	async show({ params, response }) {
		return response.download(Helpers.tmpPath(`uploads/${params.path}`));
	}

	async store({ params, request }) {
		const product = await Product.findOrFail(params.id);

		const images = request.file('image', {
			types: ['image'],
			size: '2mb',
		});

		await images.moveAll(Helpers.tmpPath('uploads'), (file) => ({
			name: `${Date.now()}-${file.clientName}`,
		}));

		if (!images.movedAll()) {
			return images.errors();
		}

		await Promise.all(
			images
				.movedList()
				.map((image) => property.images().create({ path: image.fileName }))
		);
	}
}

module.exports = ImageProductController;
