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

        // 发送数据
        response.end();
    }).listen(PORT);

// 控制台输出
console.log(`Server running at http://127.0.0.1:${PORT}/`);