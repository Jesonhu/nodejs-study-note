// __filename =========================
// console.log(__filename);
// End=========================

// __dirname =========================
// console.log('当前执行脚本所在的目录:', __dirname);
// End=========================

// setTimeout(cb, ms)=========================
// function printHello() {
//   console.log('Hello World!!');
// }
// // 1s后执行printHello
// const timer = setTimeout(printHello, 1000);

// 清除定时器
// 上面的延时定时器不会执行
// clearTimeout(timer);
// End=========================

// setInterval(cb, ms)=========================
// function printHello() {
//   console.log('Hello World!!!--setInterval');
// }

// 1s执行一次
// const timer = setInterval(printHello, 1000);

// 清除定时器, 否则只能通过ctrl + c 终止程序
// clearInterval(timer);
// End=========================

// console =========================
// console.info('程序开始执行: ');

// const counter = 10;
// console.log('计数: $d', counter);

// console.time('获取数据');

// // 执行一些代码

// // 和console.time的内容要完全一样
// console.timeEnd('获取数据'); 

// console.info('程序执行完毕');
// End =========================

// process =========================

// exitCode
// process.on('exit', (code) => {
//   console.log(`即将退出，退出码：${code}`);
// });

// process.exit('exit调用传入');

// 'exit'事件监听器的回调函数，只允许包含同步操作
// process.on('exit', (code) => {
//   // 异步会被丢弃
//   setTimeout(() => {
//     console.log('该函数不会被执行');
//   }, 0);

//   console.log('非异步可以执行。退出码为:', code);
// });
// console.log('程序执行结束');

// process.argv 命令行运行时的参数
// process.argv.forEach((value, index) => {
//   console.log(`${index}: ${value}`);
// });

// 实例，期望效果：将输入流数据输出到输出流，即输出到终端
// process.stdin.pipe(process.stdout);

// 实例，期望效果：要求用户输入两个数值，然后把和两个数值的和输出到
// 1: 终端
// let num1, num2;
// // 2: 向屏幕输出，提示信息，'请输入num1的值：'
// process.stdout.write('请输入num1的值：');
// // 3：监听用户的输入
// process.stdin.on('data', (chunk) => {
//   if (!num1) {
//     num1 = Number(chunk);
//     // 4: 向屏幕输出，提示信息，'请输入num2的值：'
//     process.stdout.write('请输入num2的值：');
//   } else {
//     num2 = Number(chunk);
//     process.stdout.write('求和结果为：' + (num1 + num2));
//   }
// });

// process.execPath
// console.log('execPath', process.execPath); // execPath C:\Program Files\nodejs\node.exe

// 平台信息
// console.log('platform', process.platform); // platform win32

// 当前方法返回 Node.js 进程当前工作的目录
// const currentDictory = process.cwd();
// console.log(`当前工作目录：${currentDictory}`); // 当前工作目录：E:\Web\NodeJs\study\runoob\code\v0.0.1

// 当前NodeJS版本
// const currentVersion = process.version;
// console.log(`当前版本：${currentVersion}`); // 当前版本：v8.10.0

// 方法返回Node.js进程的内存使用情况的对象，该对象每个属性值的单位为字节
const currentUseMemory = process.memoryUsage();
console.log(`当前使用的物理内存：${currentUseMemory.rss}`); // 当前使用的物理内存：22827008


// End =========================

/**
 * 参考资料：
 * [Node.js全局对象](http://www.runoob.com/nodejs/nodejs-global-object.html) 
 * [process--进程](http://nodejs.cn/api/process.htmlpro)
 * [process.argv](http://nodejs.cn/api/process.html#process_process_argv)
 * [process.memoryUsage](http://nodejs.cn/api/process.html#process_process_memoryusage)
 * [process.execPath](http://nodejs.cn/api/process.html#process_process_execpath)
 * [process.pwd](http://nodejs.cn/api/process.html#process_process_cwd)
 * [process.platform](http://nodejs.cn/api/process.html#process_process_platform)
 * [process.stdout](http://nodejs.cn/api/process.html#process_process_stdout)
 * [process.version](http://nodejs.cn/api/process.html#process_process_version)
 */