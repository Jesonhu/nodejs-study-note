const net = require('net');
const PORT = 8888;

// net.createServer创建一个新的TCP或IPC服务。=========================
// 期望效果：一个简单的TCP回声服务器在8124端口上监听连接
const server = net.createServer((connection) => {
  console.log('client connected');

  connection.on('end', () => {
    console.log('客户端关闭连接');
  });

  connection.write(`Hello Word!\r\n`);
  connection.pipe(connection);
});
server.listen(PORT, () => {
  console.log('server is listening');
})
// End=========================

/**
 * Node.js Net模块
 * 参考资料:
 * [runoob-Net](http://www.runoob.com/nodejs/nodejs-net-module.html)
 * [Net-网络](http://nodejs.cn/api/net.html)
 * [net.createServer](http://nodejs.cn/api/net.html#net_net_createserver_options_connectionlistener)
 */