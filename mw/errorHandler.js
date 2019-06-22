'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).send('Felipe broke in our server');
  console.error(error);
  next();
};
