import { DateTime } from 'luxon';
import Hash from '@ioc:Adonis/Core/Hash';
import {
	column,
	beforeSave,
	BaseModel,
	hasMany,
	HasMany,
	hasOne,
	HasOne,
} from '@ioc:Adonis/Lucid/Orm';

import Address from 'App/Models/Address';
import Product from 'App/Models/Product';

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

	@hasOne(() => Address)
	public defaultDeliveryAddress: HasOne<typeof Address>;

	@hasOne(() => Address)
	public defaultBillingAddress: HasOne<typeof Address>;

	@hasMany(() => Product)
	public products: HasMany<typeof Product>;

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
