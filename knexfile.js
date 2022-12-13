// Update with your config settings.
const {knexSnakeCaseMappers} = require("objection")
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "objection_api",
      user: "postgres",
      password: "3600",
      host: "localhost",
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    ...knexSnakeCaseMappers,
  },

  staging: {
    client: "pg",
    connection: {
      database: "objection_api",
      user: "postgres",
      password: "3600",
      host: "localhost",
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    ...knexSnakeCaseMappers,
  },
  production: {
    client: "pg",
    connection: {
      database: "objection_api",
      user: "postgres",
      password: "3600",
      host: "localhost",
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    ...knexSnakeCaseMappers,
  },
};
