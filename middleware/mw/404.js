'use strict';

module.exports = (req, res, next) => {
  res.status(404).send('Ed went to the wrong route');
  res.end();
};
