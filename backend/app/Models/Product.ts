import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';

import User from 'App/Models/User';

export default class Product extends BaseModel {
	@column({ isPrimary: true })
	public id: number;

	@column()
	public name: string;

	@column()
	public description: string;

	@column()
	public status: boolean;

	@column()
	public price: number;

	@column()
	public brand: string;

	@belongsTo(() => User)
	public user_id: BelongsTo<typeof User>;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
