const http = require('http');
const url = require('url');
const PORT = 8888;

function start(route) {
  const onRequest = (request, response) => {
    const pathName = url.parse(request.url).pathname;
    console.log('Request for' + pathName + 'received.');

    route(pathName);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Word');
    response.end();
  }

  http.createServer(onRequest).listen(PORT);
  console.log('Server has started.');
}

exports.start = start;

/**
 * 参考资料：
 * [runoob--router](http://www.runoob.com/nodejs/nodejs-router.html)
 */