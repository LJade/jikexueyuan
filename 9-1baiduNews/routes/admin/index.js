/**
 * Created by admin on 2016/9/27.
 */
var assert = require('../assert');
exports.index = function(req,res,next){
    assert.connection.query('SELECT * FROM  `news` ', function(err, rows) {
        res.render('admin',{rows:rows});
    });
};
exports.insert = function(req,res,next){
    var data = req.body;
    var post  = {type: data.type,
                 title:data.title,
                 imgSrc:data.imgSrc,
                 author:data.author,
                 createdAt:assert.getTime,
                 content:data.content
        };
    assert.connection.query('INSERT INTO `news` SET ?', post, function(err, result) {
        res.send(JSON.stringify({'code': 200}));
    });

};

exports.selectOne = function (req,res,next) {
    var id = req.query.newsId;
    assert.connection.query('SELECT * FROM `news` WHERE `id` = ?',[id], function (err, results) {
        res.send(JSON.stringify(results));
    });
};

exports.delete = function (req,res,next) {
    var id = req.body.newsId;
    assert.connection.query('DELETE FROM `news` WHERE `id` = ?',[id], function (err, result) {
        res.send(result);
    });
};

exports.update = function(req,res,next){
    var data = req.body;
    var updateData = [data.type,data.title,data.imgSrc,data.author,assert.getTime,data.content,data.id];
    assert.connection.query('UPDATE `news` SET type = ?, title = ?, imgSrc = ?,author = ?,updateAt = ?,content = ? WHERE id = ?',updateData, function(err, results) {
        res.send(results);
    });
};


