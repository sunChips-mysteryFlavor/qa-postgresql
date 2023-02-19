module.exports = {
  dev:{
    HOST: process.env.POSTGRES_DB_HOST_DEV,
    USER: process.env.POSTGRES_USERNAME_DEV,
    PASSWORD: process.env.POSTGRES_PASSWORD_DEV,
    DB: 'qa',
    dialect: "postgres"
  },
  prod:{
    HOST: process.env.POSTGRES_DB_HOST_PROD,
    USER: process.env.POSTGRES_USERNAME_PROD,
    PASSWORD: process.env.POSTGRES_PASSWORD_PROD,
    DB: 'qa',
    dialect: "postgres"
  }
};