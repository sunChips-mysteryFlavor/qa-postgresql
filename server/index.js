const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config( {path: '.env'} );
const decryptKey = require('./middleware/accessTokenAuthDecrypt.js');
const qaRouter = require('./routes.js');

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

app.use(decryptKey);

// Routers
app.use('/', qaRouter);


app.listen(process.env.SERVER_PORT);
console.log(`Listening at ${process.env.SERVER_PORT}`);
