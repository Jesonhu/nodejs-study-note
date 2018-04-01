const http = require('http');
const url = require('url');
const util = require('util');
const PORT = 8888;

// 解析url并输出到页面上=========================
// http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//   const urlObj = url.parse(request.url, true);
//   const urlObjStr = util.inspect(urlObj);
//   // ?name=菜鸟教程&url=www.runoob.com添加query可以看到
//   response.end(urlObjStr);
// }).listen(PORT);
// End=========================

// 获取URL的参数=========================
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  
  // 解析url参数
  const params = url.parse(request.url, true).query;

  response.write(`网站名：${params.name}\n`);
  response.write(`网站URL：${params.url}`);
  response.end();
}).listen(PORT);
// End=========================

/**
 * 参考资料：
 * [runoob-get](http://www.runoob.com/nodejs/node-js-get-post.html)
 */