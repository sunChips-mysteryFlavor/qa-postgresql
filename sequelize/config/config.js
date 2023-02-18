module.exports= {
  development: {
    username: 'mark',
    password: 'mark',
    database: 'qa',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'mark',
    password: 'mark',
    database: 'qa_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'mark', //env
    password: 'mark', //env
    database: 'qa',
    host: '127.0.0.1', //env
    dialect: 'postgres'
  }
}
