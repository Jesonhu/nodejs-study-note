const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 8888;

// http.createServer 创建Web服务器=========================
// 效果：域名下面的文件都可以打开
// http://192.168.1.90:8888/index.html
// http://192.168.1.90:8888/package.json
// http://192.168.1.90:8888/src/tree/tree.txt
// http.createServer((request, response) => {
//   // 解析请求，包括文件名
//   const pathname = url.parse(request.url).pathname;

//   // 输出请求的文件名
//   console.log(`Request for ${pathname} received.`);

//   // 从文件系统中读取请求的文件内容
//   const path = pathname.substr(1);
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       // HTTP状态码: 404: NOT FOUND
//       // Content Type: text/plain
//       response.writeHead(404, {'Content-Type': 'text/html'});
//     } else {
//       // HTTP状态码：200: OK
//       // Content Type: text/plain
//       response.writeHead(200, {'Content-Type': 'text/html'});

//       // 响应文件内容
//       response.write(data.toString());
//     }

//     // 发送响应数据
//     response.end();
//   });
// }).listen(PORT);
// End=========================

// http.request创建Web客户端=========================
// 效果: 访问网站输出index.html页面
// 用于请求的选项
const options = {
  host: 'localhost',
  port: PORT,
  path: '/index.html'
};

// 处理响应的回调函数
const callbck = (response) => {
  // 不断更新数据
  let body = '';
  response.on('data', (data) => {
    body += data;
  });

  response.on('end', () => {
    // 数据接收完成
    console.log(body);
  });
}
// 向服务器发送请求
const request = http.request(options, callbck);
request.end();
// End=========================

// 控制台输出
console.log(`Server running at http://127.0.0.1:${PORT}/`);

/**
 * Node.js http服务器模块
 * 参考资料:
 * [runoob-http](http://www.runoob.com/nodejs/nodejs-web-module.html)
 * [http](http://nodejs.cn/api/http.html)
 * [http.createServer](http://nodejs.cn/api/http.html#http_http_createserver_requestlistener)
 * [http.server](http://nodejs.cn/api/http.html#http_class_http_server)
 */