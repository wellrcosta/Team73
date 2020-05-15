import User from 'App/Models/User';
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
	public async register({ request, auth, response }: HttpContextContract) {
		/**
		 * Validate user details
		 */
		const validationSchema = schema.create({
			email: schema.string({ trim: true }, [
				rules.email(),
				rules.unique({ table: 'users', column: 'email' }),
			]),
			password: schema.string({ trim: true }, [rules.confirmed()]),
		});

		const userDetails = await request.validate({
			schema: validationSchema,
		});

		/**
		 * Create a new user
		 */
		const user = new User();
		user.email = userDetails.email;
		user.password = userDetails.password;
		await user.save();

		await auth.login(user);
		return response.json({ Status: 'Successfully created' });
	}

	public async login({ auth, request, response }: HttpContextContract) {
		const email = request.input('email');
		const password = request.input('password');
		try {
			await auth.attempt(email, password);
		} catch (error) {
			if (error.code === 'E_INVALID_AUTH_UID') {
				return response.json({ Error: 'User not found' });
			} else if (error.code === 'E_INVALID_AUTH_PASSWORD') {
				return response.json({ Error: 'Invalid password' });
			} else {
				return response.json({ Error: 'Not found resource' });
			}
		}

		return response.json({ Status: 'Logged' });
	}
}
