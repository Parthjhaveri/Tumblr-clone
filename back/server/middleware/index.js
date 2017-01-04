const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

//add all middleware to the following function:
const applyExpressMiddleware = (app) => {
  //body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../../../','/front/bundle')));
};

module.exports = applyExpressMiddleware;
