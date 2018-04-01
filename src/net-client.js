const net = require('net');
const PORT = 8888;

// net.createServer创建一个新的TCP或IPC服务。=========================
// 客户端, 配合net.createServer使用(net-module.js)
const client = net.connect({port: PORT}, (connection) => {
  console.log('连接到服务器');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('断开与服务器的连接');
});
// End=========================

/**
 * Node.js Net模块
 * 参考资料:
 * [runoob-Net](http://www.runoob.com/nodejs/nodejs-net-module.html)
 * [Net-网络](http://nodejs.cn/api/net.html)
 * [net.createServer](http://nodejs.cn/api/net.html#net_net_createserver_options_connectionlistener)
 */