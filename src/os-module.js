const os = require('os');

// os.endianness方法返回一个字符串,表明Node.js二进制编译环境的字节顺序.
console.log('endianness', os.endianness); // LE--小端模式

// os.type操作系统的名字
console.log(`type：${os.type()}`); // Windows_NT

// 返回一个字符串, 指定Node.js编译时的操作系统平台
console.log(`platform: ${os.platform()}`); // win32

// os.totalmem 以整数的形式返回所有系统内存的字节数
console.log(`total memory：${os.totalmem()} bytes.`); // 8472256512 bytes.

// 以整数的形式回空闲系统内存 的字节数
console.log(`free memory: ${os.freemem()} bytes.`);

/**
 * NodeJS工具模块
 * 参考资料：
 * [runoob-工具模块](http://www.runoob.com/nodejs/nodejs-utitlity-module.html)
 * [runoob-OS模块](http://www.runoob.com/nodejs/nodejs-os-module.html)
 * [OS模块](http://nodejs.cn/api/os.html)
 * [os.endianness](http://nodejs.cn/api/os.html#os_os_endianness)
 * [os.freemem](http://nodejs.cn/api/os.html#os_os_freemem)
 * [os.platform](http://nodejs.cn/api/os.html#os_os_platform)
 * [os.type](http://nodejs.cn/api/os.html#os_os_type)
 * [os.totalmen](http://nodejs.cn/api/os.html#os_os_totalmem)
 */