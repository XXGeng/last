var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
	if (req.url == "/favicon.ico") {
		return
	}
	fs.readdir("../day2", (err, data) => {
		if (err) throw err
		
// 		迭代处理  递归
		(function item(i){
			
// 			什么时候结束
			
// 			自己调用自己
		})(0)
		
		for (let i = 0; i < data.length; i++) {
			fs.stat("../day2/" + data[i], (err, stats) => {
				if (err) throw err
				if (stats.isDirectory()) {
					console.log(data[i])
					res.end()
				} 
				
			})
		}
	})

}).listen(3000)
