'use strict';

module.exports = (req, res, next) =>{
  return Date.now();
  next();
}