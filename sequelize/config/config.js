module.exports= {
  development: {
    username: process.env.POSTGRES_USERNAME_DEV,
    password: process.env.POSTGRES_PASSWORD_DEV,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST_DEV,
    port: process.env.POSTGRES_DB_PORT,
    dialect: 'postgres',
    define: {
      underscored: true
    }
  },
  test: {
    username: process.env.POSTGRES_USERNAME_DEV,
    password: process.env.POSTGRES_PASSWORD_DEV,
    database: process.env.POSTGRES_DB_NAME +'test',
    host: process.env.POSTGRES_DB_HOST_DEV,
    port: process.env.POSTGRES_DB_PORT,
    dialect: 'postgres',
    define: {
      underscored: true
    }
  },
  production: {
    username: process.env.POSTGRES_USERNAME_PROD,
    password: process.env.POSTGRES_PASSWORD_PROD,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST_PROD,
    port: process.env.POSTGRES_DB_PORT,
    dialect: 'postgres',
    define: {
      underscored: true
    }
  }
}
