//  fs  文件系统 
// 加载http模块

var http=require("http")
var fs=require("fs")
//服务器
http.createServer((req,res)=>{
	if (req.url == "/favicon.ico") {
		return
	}
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	// readFile 读文件
// 	fs.readFile("1.txt",(err,data)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log(data.toString())
// 	})

	// writeFile 写文件 flag w write 写  默认值  r  read 读  a append  追加
// 	fs.writeFile("2.txt","我是cont",(err)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log("成功")
// 		fs.readFile("2.txt",{"flag":"a"},(err,data)=>{
// 			if(err){
// 				throw err
// 			}
// 			console.log(data.toString())
// 		})
// 		res.end()
// 	})	
	
	// mkdir 创建目录
// 	fs.mkdir("./css",(err)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log("成功")
// 		res.end()
// 	})
	// 删除目录 
// 	fs.rmdir("./css",(err)=>{
// 		if(err) throw err
// 		console.log("成功")
// 		res.end()
// 	})
	
 	//文件重命名
// 	fs.rename("./1.txt","./111.txt",(err)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log("成功")
// 		res.end()
// 	})
	
	//文件删除
// 	fs.unlink("./111.txt",(err)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log("成功")
// 		res.end()
// 	})
	
	//判断某个文件夹是否存在  存在什么都不做 不存在就创建
// 	fs.exists("./css",(exists)=>{
// 		if(exists){
// 			console.log("文件夹已存在")
// 		}else{
// 			fs.mkdir("./css",(err)=>{
// 				if(err) throw err
// 				res.end()
// 			})
// 		}
// 	})
	
	//读取文件夹信息
// 	fs.readdir("../day2",(err,data)=>{
// 		if(err){
// 			throw err
// 		}
// 		console.log(data)
// 		res.end()
// 	})
	
	//判断是文件还是文件夹
	fs.stat("../day2",(err,stats)=>{
		if(err){
			throw err
		}else{
			if(stats.isDirectory()){
				console.log("是文件夹")
			}else{
				console.log("是文件")
			}
		}
		res.end()
	})	
	
	
	
}).listen(3000)