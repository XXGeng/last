// 加载http模块

var http=require("http")
var url=require("url")
//服务器
http.createServer((req,res)=>{
	var result = url.resolve("http://loaclhost:3000/publick","form.html")
	
	res.end()
}).listen(3000)