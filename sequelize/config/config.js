module.exports= {
  development: {
    username: process.env.POSTGRES_USERNAME_DEV,
    password: process.env.POSTGRES_PASSWORD_DEV,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST_DEV,
    dialect: 'postgres'
  },
  test: {
    username: process.env.POSTGRES_USERNAME_DEV,
    password: process.env.POSTGRES_PASSWORD_DEV,
    database: process.env.POSTGRES_DB_NAME +'test',
    host: process.env.POSTGRES_DB_HOST_DEV,
    dialect: 'postgres'
  },
  production: {
    username: process.env.POSTGRES_USERNAME_PROD,
    password: process.env.POSTGRES_PASSWORD_PROD,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST_PROD,
    dialect: 'postgres'
  }
}
