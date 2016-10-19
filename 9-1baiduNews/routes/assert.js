var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'baidu'
});

var date  = new Date();
var time = (date.getTime()/1000).toFixed(0);
module.exports = {
    connection:connection,
    getTime:time
};
