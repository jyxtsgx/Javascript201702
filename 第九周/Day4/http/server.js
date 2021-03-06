// http 内置模块 搭建server
let http = require('http');
let fs = require('fs');
let mime = require('mime'); // 第三方模块
// console.log(mime);
/**
 * req 代表客户端请求对象
 * res 代表的是服务端响应对象
 */
http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
    }
    // 其他的静态资源请求处理
    if(req.url === '/index1.js') {
        res.setHeader('Content-Type', 'application/javascript;charset=utf-8');
        let resJs = fs.readFileSync('./index1.js');
        res.end(resJs);
    }

    if(req.url === '/index1.css') {
        res.setHeader('Content-Type', 'text/css;charset=utf-8');
        let resCss = fs.readFileSync('./index1.css');
        res.end(resCss);
    }

        // res.end('hello server!'); // 结束响应
}).listen(8000, function () {
    console.log('监听8000端口');
});
