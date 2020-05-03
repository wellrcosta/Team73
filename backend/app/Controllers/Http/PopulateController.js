'use strict';
const Faker = require('faker');
const Hash = use('Hash');
const User = use('App/Models/User');
const Product = use('App/Models/Product');
const Category = use('App/Models/ProductCategory');

class PopulateController {
	async Do() {
		const cat = { name: 'Eletrodomésticos' };
		await Category.create(cat);

		const fakePass = '123456';
		let i = 0,
			j = 0;
		let stat;
		for (i = 0; i < 20; i++) {
			var name = Faker.internet.userName();
			var fakeEmail = Faker.internet.email();
			const data = {
				username: name,
				email: fakeEmail,
				password: fakePass,
			};
			stat = await User.create(data);
			for (j = 0; j < 10; j++) {
				var nm = Faker.commerce.productName();
				var dsc = Faker.hacker.phrase();
				var sts = 1;
				var prc = Faker.commerce.price();
				var brnd = Faker.company.companyName();
				const dt = {
					user_id: stat.id,
					name: nm,
					description: dsc,
					status: sts,
					price: prc,
					brand: brnd,
					category: 'Eletrodomésticos',
				};
				try {
					await Product.create(dt);
				} catch (err) {
					console.log(err);
				}
			}
		}
		return stat;
	}
}

module.exports = PopulateController;
