'use strict';

const express = require('express');
const errorHandler = require('./mw/errorHandler.js');
const dateTime = require('./mw/requestTime.js');
const logger = require('./mw/logger.js');
const notFound = require('./mw/404.js');
const app = express();

const PORT = process.env.PORT || 8080;

let math = (number) => {
  return(req, res, next) => {
    req.number = number**2;
    next();
  }
}
let squaredNumber = math(5);

app.get('/a', dateTime, logger, (req, res, next) => {

  // console.log(req.requestTime);
  // res.status(200).send('Route A');
  res.status(200).send(req.requestTime);
  
});


app.get('/b', dateTime, logger, squaredNumber, (req, res, next) => {
  res.status(200).send(`${req.number}`);
});

app.get('/c', dateTime, logger,(req, res, next) => {
  res.status(200).send('Route C');
});

app.get('/d', dateTime , logger, (req, res, next) => {
  
  next('Adam error');
});

app.get('*', notFound, logger, (req, res, next) => {
  console.log('catch all');
  // res.status(500)
  // next();
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

