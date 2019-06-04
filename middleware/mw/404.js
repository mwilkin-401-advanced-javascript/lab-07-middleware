'use strict';

module.exports = (req, res, next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('No idea what you what');
  res.end();
  }