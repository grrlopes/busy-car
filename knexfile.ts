import { join } from "path";
const BASE_PATH = __dirname;
const knexcfg = {
  test: {
    client: "postgresql",
    connection: {
      host: "beluga",
      database: "busyrent",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: join(BASE_PATH, "db/migrations"),
      tableName: "knex_migrations",
      extension: "ts",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: "beluga",
      database: "busyrent",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: join(BASE_PATH, "db/migrations"),
      tableName: "knex_migrations",
      extension: "ts",
    },
  },
};

export = knexcfg;
