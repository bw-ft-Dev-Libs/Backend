// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/dev.db3'
    }, 
    migrations: {
      directory: './database/dev/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/dev/seeds'
    }, 
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/test.db3'
    },
    migrations: {
      directory: './database/testing/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/testing/seeds'
    }, 
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./database/dev/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './databse/dev/seeds'
    }
  }

};
