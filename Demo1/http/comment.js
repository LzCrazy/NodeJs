var http = require("http")
var querystring =require('querystring')

var postData = querystring.stringify({
	'content':'试一试慕课网评论',
	'parent_id':null

})

var options={
	hostname:'www.jianshu.com',
	port:80,
	url:'/notes/6926939/comments',
	method:'POST',
	headers:{
		"Accept":"application/json",
		"Accept-Encoding":"gzip, deflate",
		"Accept-Language":"zh-CN,zh;q=0.8,zh-TW;q=0.6",
		"Connection":"keep-alive",
		"Content-Length":postData.length,
		"Content-Type":"application/json",
		"Cookie":"UM_distinctid=15b0b0268ce24f-0bc5b8679e47d9-39687b04-1fa400-15b0b0268cfc35; CNZZDATA1258679142=1728958182-1490708313-https%253A%252F%252Fwww.baidu.com%252F%7C1493215394; remember_user_token=W1syMzY3NjQzXSwiJDJhJDEwJEdCTVhxMXBjc2xpanJYaUVLYlluSy4iLCIxNDk1MjczNTg2LjgwMzYwNDgiXQ%3D%3D--10d75dd905d920836dfa434f1ed9790ad2d3e558; _ga=GA1.2.1594530219.1490709072; _gid=GA1.2.486914381.1496075031; _gat=1; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1495455396,1495809513,1495984000,1496075031; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1496075031; _session_id=TEd0Vm1lbkpuYzRhTU5qbVdUWjh4SHFwd0ZHSGpEMkQybnVWTWd1Y0I5MVRuTnZlRzlVYnY2eDF6aGpjb29vbW54TkVRNnZuUEJVVGMrOEIxanpvUTVHc1BiUFVrbHEzSDFGaDNHTmZGMVpLRkhiNkJ6U1VVOWlNM1dhVHhrSlFYTUUzclJzUnZRSmhEUkZ3UUsybVM2aGM4WHdOcmwxTGpkOS9kWC9QZSs4a2Y1azFoSFI5dEJaaDFlTXFPL2lvdGtyVHFjS0d1cHJOS3FLeEpvU3VvM3RYQXBobDE2WUcyOW9lTDdTOVAwLzRKUzNlbXRERFhUUHU3M29MZ2F2S1NiWUdidG82cVpiN1dQUlNDMndBQmhBbkdDWTgwUTZUNnVIVWxWSWJKMkQyOXFkOUFkV0R6ckN0YTVXVDRPVG9rakNvQXdmbWQ2ek96aDFQSzJOWFpUOTZ3SWZJc0hSWnFieG9lSmxGajJhZkRkRUt5ZkZXdVArU2wzNzN1ajF3SWVjcFNoRXd4ZEEwNDU2ZS9xR3NQR1ZwMVhVcmdQdUZrM2NVaHhCVENBTT0tLVFCSXMreHFBKyt6QUNXM3lNMW84dVE9PQ%3D%3D--48589b1fad4e85c100dd3fe3b090c4bbf0abb30b",
		"Host":"www.jianshu.com",
		"Origin":"http://www.jianshu.com",
		"Referer":"http://www.jianshu.com/p/96b04087e756",
		"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
	}
}

var req = http.request(options,function (res) {
	console.log('Status:'+res.statusCode)
	console.log('headers:'+JSON.stringify(res.headers))


	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('评论完毕')
	})

})
	req.on('error',function(e){
		console.log('Erroe'+e.message)
	})
	req.write(postData)
	req.end()

