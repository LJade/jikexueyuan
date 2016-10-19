/**
 * Created by admin on 2016/9/27.
 */
var assert = require('../assert');

exports.index = function(req,res,next){
        res.render('index');
};

exports.getNews = function (req,res,next) {
    var type = req.query.type;
    assert.connection.query('SELECT * FROM  `news` WHERE `type` = ?',[type], function(err, rows) {
        res.send(JSON.stringify(rows));
    });
};
