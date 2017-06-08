var crypto = require("crypto");

console.log(md5(
	md5("123123").substr(11,7)+md5("123123")));

function md5(mingma){
	// 创建加密类型
	var md5 = crypto.createHash("md5");
	var password = md5.update(mingma).digest('base64');
	return md5;
}