'use strict';

module.exports = (err, req, res, next) => {
  console.error('Error Detected on Server!');
  console.error(err);
  res.status(500).send('oh no...Ed and Tia made a mistake.');
}