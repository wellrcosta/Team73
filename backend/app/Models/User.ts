import { DateTime } from 'luxon';
import Hash from '@ioc:Adonis/Core/Hash';
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm';

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public username: string;

	@column()
	public email: string;

	@column()
	public password: string;

	@column()
	public rememberMeToken?: string;

	@column()
	public identification: string;

	@column()
	public isSeller: boolean;

	@column()
	public makeDeliveries: boolean;

	@column()
	public score: number;

	@column()
	public range: number;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;

	@beforeSave()
	public static async hashPassword(user: User) {
		if (user.$dirty.password) {
			user.password = await Hash.hash(user.password);
		}
	}
}
