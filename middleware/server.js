'use strict';

const express = require('express');
const app = express();
const unknown = require('./mw/404');
const requestTime = require('./mw/time');
const cD = require('./routes');
const logger = require('./mw/logger');

const PORT = process.env.PORT || 3000;

app.use(cD);

let math = (number) => {
  return(req, res, next) => {
    req.number = number**2;
    next();
  };
};

let squared = math(3);


app.get('/a', requestTime, (req,res) => {
  res.status(200).send(req.requestTime);
});

app.get('/b', logger, squared, (req, res, next) => {
  res.status(200).send(`${req.number}`);
});


app.get('*', unknown, logger, (req, res) => {
  console.log('Catch All');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));