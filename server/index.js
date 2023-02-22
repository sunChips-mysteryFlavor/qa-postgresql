const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const redis = require('redis');
const dotenv = require('dotenv').config( {path: '.env'} );
const ghAuth = require('./middleware/ghAuth.js');
const decryptKey = require('./middleware/accessTokenAuthDecrypt.js');
const qaRouter = require('./routes.js');

const redisClient = redis.createClient(6372);
redisClient.on('connect', function() {
  console.log('Redis: Connected!');
  exports.redis = redisClient
});

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

//Github Authorization
// app.use(decryptKey);
// app.use(ghAuth);

// Routers
app.use('/', qaRouter);


app.listen(process.env.SERVER_PORT);
console.log(`Listening at ${process.env.SERVER_PORT}`);
