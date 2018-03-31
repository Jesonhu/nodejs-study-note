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

        // Buffer(缓冲区)=========================
        // const buffer = Buffer.from('runoob', 'ascii');
        // const bufferHex = buffer.toString('hex');
        // const bufferBase64 = buffer.toString('base64');

        // response.write(`${bufferHex}\n`);
        // response.write(`${bufferBase64}\n`);

        // 创建一个长度为10, 且用0填充的Buffer
        // const buffer1 = Buffer.alloc(10);
        // response.write(`${buffer1}`); // 浏览器会下载二进制的文件

        // 创建一个长度为256长度的Buffer的实例
        // const buffer1 = Buffer.alloc(256);
        // 返回一写入缓存区的长度
        // const len = buffer1.write('www.runnob.coms');
        // response.write(len.toString());

        // 实例
        // const buffer1 = Buffer.alloc(26);
        // for (let i = 0; i < 26; i++) {
        //     buffer1[i] = i + 97; // 小写字母97开始
        // }

        // 返回ascii编码的字符串
        // const encodeStr = buffer1.toString('ascii');
        // 返回ascii编码的指定长度的字符串
        // const encodeStr = buffer1.toString('ascii', 0, 5);
        // 返回utf-8编码的指定长度的字符串
        // const encodeStr = buffer1.toString('utf8', 0, 5);
        // 默认使用utf8编码
        // const encodeStr = buffer1.toString(undefined, 0, 6);

        // 实例: 返回JSON对象
        // const array1 = [0x1, 0x2, 0x3, 0x4, 0x5];
        // const buffer1 = Buffer.from(array1);
        // // 当实例化一个Buffer实例时, JSON.stringify()会先隐式调用实例的toJSON()
        // // 转化为JSON对象, 再返回JSON的字符串表示
        // const json1 = JSON.stringify(buffer1); // {"type":"Buffer","data":[1,2,3,4,5]}
        // const copy1 = JSON.parse(json1, (key, value) => {
        //     return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
        // });
        // response.write(json1);

        // 实例: 缓存区合并
        // const buffer1 = Buffer.from('菜鸟教程');
        // const buffer2 = Buffer.from('www.runoob.com');
        // const buffer3 = Buffer.concat([buffer1, buffer2]);
        // const bufferUtf8Str = buffer3.toString('utf8');
        // console.log('合并后的内容为:', bufferUtf8Str);
        // FIXME: node的console.log可以输出中文, chrome输出中文显示乱码。
        // response.write(bufferUtf8Str);

        // 实例: 缓冲区比较
        // const buffer1 = Buffer.from('ABC');
        // const buffer2 = Buffer.from('ABCD');
        // const bufferCompareNum = buffer1.compare(buffer2);
        // let resultStr = '';

        // if (bufferCompareNum < 0) {
        //     resultStr = `${buffer1} 在 ${buffer2} 之前`;
        // } else if (bufferCompareNum === 0 ) {
        //     resultStr = `${buffer1} 与 ${buffer2} 相同`;
        // } else {
        //     resultStr = `${buffer1} 在 ${buffer2} 之后`;
        // }
        // response.write(resultStr);

        // 实例: 拷贝缓冲区
        // let buffer1 = Buffer.from('abcdefghijkl');
        // const buffer2 = Buffer.from('RUNOOB');

        // // 将buffer2插入到buffer1的位置上
        // buffer2.copy(buffer1, 2);
        // const afterCopyBuffer1Str = buffer1.toString();
        // console.log('buffer1', buffer1); // <Buffer 61 62 52 55 4e 4f 4f 42 69 6a 6b 6c>
        // console.log('afterCopyBuffer1Str', afterCopyBuffer1Str); // abRUNOOBijkl
        // response.write(afterCopyBuffer1Str);

        // 实例: 缓冲区裁剪
        // const buffer1 = Buffer.from('runoob');

        // // 剪切缓冲区
        // const buffer2 = buffer1.slice(0, 2);
        // const buffer2Str = buffer2.toString(); // ru
        // response.write(buffer2Str);

        // 实例: 缓冲区长度
        const buffer1 = Buffer.from('www.runoob.com');
        const buffer1Length = buffer1.length;
        // 缓冲区长度
        response.write(`缓冲区长度为: ${buffer1Length}`);

        // End=========================

        // 发送数据
        response.end();
    }).listen(PORT);

// 控制台输出
console.log(`Server running at http://127.0.0.1:${PORT}/`);

/**
 * 参考资料：
 * [runoob--Buffer](http://www.runoob.com/nodejs/nodejs-buffer.html)
 */