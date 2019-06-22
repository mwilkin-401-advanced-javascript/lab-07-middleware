'use strict';

const errorHandler = require('./mw/errorHandler');
const router = require('express').Router();

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});
  
router.get('/d', errorHandler, (req, res, next) => {
  console.log('error route');
  next();
});

module.exports = router;