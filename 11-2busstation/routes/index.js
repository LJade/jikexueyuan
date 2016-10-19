var express = require('express');
var station = require('./station/index');

module.exports =function(app) {
  app.get('/home',station.getStation);
};
