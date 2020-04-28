'use strict';

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

module.exports = {
	/*
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  */
	authenticator: 'jwt',

	/*
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  */
	session: {
		serializer: 'lucid',
		model: 'App/Models/User',
		scheme: 'session',
		uid: 'email',
		password: 'password',
	},

	jwt: {
		serializer: 'lucid',
		model: 'App/Models/User',
		scheme: 'jwt',
		uid: 'email',
		password: 'password',
		options: {
			secret: Env.get('APP_KEY'),
		},
	},
};
