const http = require('http');
const fs = require('fs');
const events = require('events');
const PORT = 8888;

    // 发送HTTP头部
    http.createServer((request, response) => {
        // http状态值： 200：ok
        // 内容类型： text/plain
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        // response.write(`<head><meta charset='utf-8'/></head>`);
        // response.write(`Hello NodeJs\n`);

        // 读取文件=========================
        // const data = fs.readFileSync('./file/input.txt');
        // const dataStr = data.toString();
        // response.write(dataStr);
        // End=========================

        // 事件循环=========================

        // 创建eventEmitter对象
        // const eventEmitter = new events.EventEmitter();

        // // 创建事件处理程序(callback)
        // const connected = () => {
        //     response.write('connected\n');

        //     // 触发连接成功后的事件
        //     eventEmitter.emit('data_received');
        // }
        // const connectHandler = connected;

        // // 绑定connection事件处理程序
        // eventEmitter.on('connection', connectHandler);

        // // 使用你们函数绑定data_received事件
        // eventEmitter.on('data_received', () => {
        //     response.write('data_received\n');
        // });

        // // 触发connection事件
        // eventEmitter.emit('connection');

        // End=========================

        // 发送数据
        response.end();
    }).listen(PORT);

// 控制台输出
console.log(`Server running at http://127.0.0.1:${PORT}/`);