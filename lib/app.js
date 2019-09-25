const express = require('express');
const app = express();

// middleware
const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
// test route
app.get('/wut', (req, res) =>{
  res.send('do');
});
//Checks Connection
app.use(checkConnection);
// API ROUTES
const dogs = require('./routes/dogs');
app.use('api/dogs', dogs);

// NOT FOUND
const api404 = require('../lib/middleware/api-404');
app.use('/api', api404);
// ERRORS
const errorHandler = require('../lib/middleware/error-handler');
app.use(errorHandler);

module.exports = app;