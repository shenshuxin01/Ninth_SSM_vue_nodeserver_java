// console.log('hello world');
console.log('开始测试http+IO');
let http = require('http');
let fs = require('fs');
const querystring = require("querystring");

http.createServer(function (request,response) {
    if (request.url == '/favicon.ico'){
        return;
    }

    console.log("\n =====开始处理=====")
    let url = request.url;
    console.log(request.method+"获取到的url："+url)
    let path = '/root/node_file/test1.txt';

    if (url == '/read1/test1.file'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write('开始去读文件 \n');
        response.write('--------------------- \n');
        fs.readFile(path,function (err, data) {
            if (err){
                return console.error(err);
            }
            let s = data.toString();
            response.write(s);
            response.end();
        });
    }
    else if (url == '/write1/test1.file'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write('开始写文件\n');
        response.write('------------\n');

        //开始创建目录文件夹
        fs.mkdir('/root',function(err1){
            fs.mkdir('/root/node_file',function(err2){
                    //获取data请求
                    let postData = "";
                    // 数据块接收中
                    request.addListener("data", function (postDataChunk) {
                        postData += postDataChunk;
                    });
                    // 数据接收完毕，执行回调函数
                    request.addListener("end", function () {
                        //创建文件并且写入数据
                        fs.writeFile(path,postData,function (err) {
                            if (err) console.error(err)
                        });
                    });
                    response.write("写入成功！");
                    response.end()
            });
        });
    }
    else {
        response.writeHead(400, {'Content-Type': 'application/json'});
        response.end('错误的url');
    }
}).listen(8091)
