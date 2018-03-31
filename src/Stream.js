const fs = require('fs');
const zlib = require('zlib');

// 读取流操作=========================
// 创建可读流
// let dataStr = '';
// const readAbleStream = fs.createReadStream('src/file/input.txt');

// // 设置编码为utf8
// readAbleStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readAbleStream.on('data', (chunk) => {
//     dataStr += chunk;
// });
// readAbleStream.on('end', () => {
//     console.log(dataStr);
// });
// readAbleStream.on('error', (err) => {
//     console.log(err.stack);
// });
// End=========================

// 写入流操作=========================
// const outPutStr = 'Hello World NodeJs from Jesonhu';
// // 创建一可以写入的流，写入到output.txt中
// const writerStream = fs.createWriteStream('src/file/output.txt');
// // 使用utf8编码写入数据
// writerStream.write(outPutStr, 'UTF8');
// // 标记文件末尾
// writerStream.end();

// // 处理流事件 --> data, end, error
// writerStream.on('finish', (chunk) => {
//     console.log('写入完成');
// });
// writerStream.on('error', (err) => {
//     console.log(err.stack);
// });
// End=========================

// 管道流=========================
// 创建一个可写流
// const writerStreamOfPipe = fs.createWriteStream('src/file/pipe.txt');
// // 管道读写操作
// // 读取src/file/input.txt文件的内容，并将内容写入到src/file/pipe.txt文件中
// readAbleStream.pipe(writerStreamOfPipe);
// End=========================

// 链式流=========================
// 期望效果: 压缩src/file/input.txt文件，生成压缩后的文件src/file/input.txt.gz
const readStreamPath = 'src/file/input.txt';
const writeGzStreamPath = 'src/file/input.txt.gz';
const writeZipStreamPath = 'src/file/input.txt.zip';

// 生成.zip压缩文件
// fs.createReadStream(readStreamPath)
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream(writeZipStreamPath));
// console.log('文件压缩完成');

// 生成.gz压缩文件
// fs.createReadStream(readStreamPath)
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream(writeGzStreamPath));
// console.log('文件压缩完成');

// 期望效果: 解压缩src/file/input.txt-gz, 生成解压缩后的文件src/file/input_decompress_result.txt;
const writeDecompressStreamPath = 'src/file/input_decompress.txt';
const writeDecompressStreamPath2 = 'src/file/input_decompress_result.txt';
const zipStreamPath = 'src/file/input.txt.zip';
const gzStreamPath = 'src/file/input.txt.gz';
let deCompressStreamHandler = null;

// tips: 压缩和解压缩代码放在了一起, 而且两个异步操作没处理顺序
//       现实中应该是先压缩成功后才能进行解压缩操作,或者只处理压缩或者解压缩。
//       如果同时执行顺序没处理好就会报 Error: unexpected end of file
//                        at Gunzip.zlibOnError (zlib.js:153:15)

// 解压.zip文件，生成input_decompress_result.txt
deCompressStreamHandler = fs.createReadStream(zipStreamPath);
deCompressStreamHandler.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream(writeDecompressStreamPath2));

// 解压.gz文件，生成input_decompress.txt
// deCompressStreamHandler = fs.createReadStream(gzStreamPath);
// deCompressStreamHandler.pipe(zlib.createGunzip())
// 	.pipe(fs.createWriteStream(writeDecompressStreamPath));


// 压缩事件处理 --> error
deCompressStreamHandler.on('error', (err) => {
		console.log('deCompressStreamError', err.stack);
});
console.log('文件解压缩完成');
// End=========================


console.log('程序执行完毕');
/**
 * 参考文档:
 * [runoob--stream](http://www.runoob.com/nodejs/nodejs-stream.html)
 * [NodeJS--fs](http://nodejs.cn/api/fs.html)
 * [NodeJS--zlib](http://nodejs.cn/api/zlib.html)
 */