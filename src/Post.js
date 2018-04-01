const http = require('http');
const querystring = require('querystring');
const util = require('util');
const PORT = 8888;

const postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer((request, response) => {
  // 定义了一个body变量，用于暂存请求体的信息
  let body = '';

  // 通过request的data事件监听函数，每当接收到请求体的数据，就累加到body变量中
  request.on('data', (chunk) => {
    body += chunk;
  });

  // 在end事件触发后，通过querystring.parse将body解析为真正的body请求格式，然后向客户端返回
  request.on('end', () => {
    // 解析参数
    body = querystring.parse(body);
    // 设置相应头部信息和编码
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

    // 表单填值了
    if (body.name && body.url) {
      response.write(`网站名：${body.name}<br>`);
      response.write(`网站URL：${body.url}`);
    } else { // 显示表单
      response.write(postHTML);
    }
    response.end();
  });
}).listen(PORT);

/**
 * 参考资料：
 * [runoob-post](http://www.runoob.com/nodejs/node-js-get-post.html)
 */