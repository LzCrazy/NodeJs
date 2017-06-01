var express = require('express');
var router = express.Router();

router.all('/list', function(req, res) {
	
	console.log(req.method);
	console.log(req.baseUrl);
	console.log(req.path);
	
	console.log(req.headers['user-agent']);
	// 获取某一请求头
	console.log(req.get('user-agent'));
	
	// 获取url查询参数
	console.log(req.query);
	// 获取url查询参数值
	console.log(req.query.id);
	
	// post请求时，获取body中的参数值
	console.log(req.body);
	console.log(req.body.id);
	
	res.send('hello');
});

//router.get('/:id', function(req, res) {
//	// rest风格
//	console.log(req.params.id);
//	res.send('ok');
//});

router.get('/fb', function(req, res) {
	res.status(403).send('^_^ forbidden!');
});

router.get('/tt', function(req, res) {
	res.contentType('application/javascript');
	res.sendFile('/ok.js', {root: __dirname + '/../public'});
});

router.get('/mm', function(req, res) {
	res.json({a:1, b:[true, 'ok']});
});

module.exports = router;


