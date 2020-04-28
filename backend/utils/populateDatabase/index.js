import { fake } from 'faker';

const User = use('App/Models/User');

class Populate {
	async Do() {
		let i = 0;
		for (i = 0; i < 50; i++) {
			const data = faker.fake(
				'{username: {internet.userName}, email: {internet.email}, password:{internet.password}}'
			);
			const user = await User.create(data);
		}
	}
}

module.exports = Populate;
