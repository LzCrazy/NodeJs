var http = require('http')
var url =  require('url')

var server = http.createServer(function(req,res) {
	var pathname = url.parse(req.url,true).pathname
	console.log("pathname:"+pathname)

	var query = url.parse(req.url).query
	console.log('query:'+query)

	var age = query.age
	console.log(age)


	res.end()
})
server.listen(4000,'localhost')


/*
URL
	1.url.parse(urlstring,boolean,boolean)
	parse方法将url的字符串解析并返回为URL的对象
	第二个参数：默认值为false，没有解析的字符串，true，query的属性是一个对象
	第三个参数：默认值为false，如果为true，则将“//”之后至下一个'/'之前的字符串解析为host
		例如：//foot/bar会被解析为{host:'foo',pathname:'/bar'}

	2.url.format(urlobj)
	format方法将传入的URL对象编程一个URL字符串并返回

	3.url.resolve(from,to)
	resolve方法返回一个格式为'form/to'的字符串，也就是将两个参数用'/'符号进行拼接




queryString
	1.querystring.parse(str,separator,eq,optons)
	parse方法将一个字符串反序列化为一个对象
	参数：
		str:需要反序列化的字符串
		separator：分割str这个字符串的字符或字符串，默认值为‘&’
		eq:用于划分键和值的字符或字符串，默认值”=“
		options:是一个对象，可设置为maxKeys和codeURLComponnet属性
			maxKeys:传入一个number类型，指定解析键值对的最大值，默认是1000，设置为0，则取消解析的数量限制
			decodeURLComponent：传入一个函数，用于对%的字符串进行解码

	2.querystring.stringify(obj,separator,options)
	stringify:将一个对象序列化成字符串，与parse相反
	参数：
		obj:序列化为字符串的对象
		separator：连接键值对的字符或字符串，默认值“&”
		options：可以传入一个对象，可设置为encodeURLComponent属性

	3.querystring.escape(str)
	escape可使传入的字符串进行编码

	4.querystring.unescape(str)
	unescape方法可将含有%的字符进行解码

	querystring.stringify序列化;
　　querystring.parse反序列化;
　　querystring.escape编码;
　　querystring.unescape解码;

*/