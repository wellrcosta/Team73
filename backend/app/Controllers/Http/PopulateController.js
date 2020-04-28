'use strict';
const Faker = require('faker');
const Hash = use('Hash');
const User = use('App/Models/User');

class PopulateController {
	async Do() {
		const fakePass = await Hash.make('123456');
		let i = 0;
		for (i = 0; i < 50; i++) {
			var name = Faker.internet.userName();
			var fakeEmail = Faker.internet.email();
			const data = {
				username: name,
				email: fakeEmail,
				password: fakePass,
			};
			const user = await User.create(data);
		}
		return { Done: 'Database populated' };
	}
}

module.exports = PopulateController;
