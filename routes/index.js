var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('logout',function(req,res,next){
res.send('logout');
});
router.get('/login',function(req,res,next){
res.send('login');
});
router.get('/reg',function(req,res,next){
res.render('reg',{title:'用户注册'});
});
router.get('/post',function(req,res,next){
res.send('post');
});
router.get('/u/:user',function(req,res,next){
res.send('user');
});
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

module.exports = router;
