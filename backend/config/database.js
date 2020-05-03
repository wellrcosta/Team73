'use strict';

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers');

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
<<<<<<< HEAD
	connection: Env.get('DB_CONNECTION', 'sqlite'),
	/*
=======
  connection: Env.get('DB_CONNECTION', 'sqlite'),
  /*
>>>>>>> 5718e6c60fbbae5fad73a782b73e21a803c19e40
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
<<<<<<< HEAD
	pg: {
		client: 'pg',
		connection: {
			host: Env.get('DB_HOST', 'localhost'),
			port: Env.get('DB_PORT', ''),
			user: Env.get('DB_USER', 'root'),
			password: Env.get('DB_PASSWORD', ''),
			database: Env.get('DB_DATABASE', 'adonis'),
		},
		debug: Env.get('DB_DEBUG', false),
	},
	sqlite: {
		client: 'sqlite3',
		connection: {
			filename: Helpers.databasePath(
				`${Env.get('DB_DATABASE', 'development')}.sqlite`
			),
		},
		useNullAsDefault: true,
		debug: Env.get('DB_DEBUG', false),
	},
};
=======
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis'),
    },
    debug: Env.get('DB_DEBUG', false),
  },
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(
        `${Env.get('DB_DATABASE', 'development')}.sqlite`
      ),
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false),
  },
};
>>>>>>> 5718e6c60fbbae5fad73a782b73e21a803c19e40
