module.exports = {
    devServer: {
        port: 8808,
        proxy: {
            '/read1': {  // '/api'只是一个标识，可以写成别的
                // target: 'http://39.107.104.254:801', //跨域请求目标信息
                target: 'http://localhost:8091', //跨域请求目标信息
                changeOrigin: true, //是否是跨域请求
                // pathRewrite: { '^/api':''}  //把”/api“替换成”“
                //pathRewrite的作用是解析最终的url全路径，进行替换。相当于java：String.replace()方法
                //例子 解析前的url：http://39.107.104.254:80/api/xxx.do
                //例子 最终的url：http://39.107.104.254:80/xxx.do
            },
            '/write1': {  // '/api'只是一个标识，可以写成别的
                // target: 'http://39.107.104.254:801', //跨域请求目标信息
                target: 'http://localhost:8091', //跨域请求目标信息
                changeOrigin: true, //是否是跨域请求

            },
            '/Ninth_SSM_Demo_war': {  // '/api'只是一个标识，可以写成别的
                // target: 'http://39.107.104.254:801', //跨域请求目标信息
                target: 'http://localhost:8080', //跨域请求目标信息
                changeOrigin: true, //是否是跨域请求

            }
        }
    }
};
