'use strict';

const express = require('express');
const errorHandler = require('./mw/errorHandler.js');
const dateTime = require('./mw/requestTime.js');
const notFound = require('./mw/404.js');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

app.get('*', notFound, (req, res, next) => {
  console.log('catch all');
  // res.status(500)
  // next();
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

