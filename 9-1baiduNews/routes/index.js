var express = require('express');
var router = express.Router();
var home = require('./home/index');
var admin  = require('./admin/index');
/* GET  page. */
module.exports =function(app) {

  //首页相关
  app.get('/home',home.index);
  app.get('/news',home.getNews);

  //后台相关
  app.get('/admin',admin.index);              //访问页面
  app.post('/admin/insert',admin.insert);           //插入数据
  app.get('/admin/selectOne',admin.selectOne);     //查询一条数据
  app.post('/admin/delete',admin.delete);           //删除
  app.post('/admin/update',admin.update);           //修改
};