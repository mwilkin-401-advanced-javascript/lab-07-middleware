'use strict';

module.exports = (req, res, next) =>{
  req.requestTime = new Date();
  // console.log(new Date());
  next();
}