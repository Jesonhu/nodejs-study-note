const fs = require('fs'); // 文件管理系统

// 读取文件=========================
// 1.创建src/file/input.txt
// 2.异步读取
// const filePath = 'src/file/input.txt';
// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(`异步读取：${data.toString()}`);
// });
// 2.同步读取
// const fileData = fs.readFileSync(filePath);
// console.log(`同步读取：${fileData.toString()}`);

// End=========================

// 打开文件=========================
// const filePath = 'src/file/input.txt';
// // 异步打开文件
// console.log('准备打开文件');
// fs.open(filePath, 'r+', (err, fd) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('文件打开成功!!');
// });
// End=========================

// 获取文件信息=========================
// const filePath = 'src/file/input.txt';
// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     return console.error(err);
//   }
//   const isFile = stats.isFile();
//   console.log(`是否是文件：${isFile}`);
// });
// End=========================

// 写入文件=========================
// const filePath = 'src/file/input.txt';
// const writeData = '我是通过fs.writeFile写入文件的内容';
// fs.writeFile(filePath, writeData, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('数据写入成功！');
//   console.log('-----我是分割线-----');
//   console.log('读取写入的数据');
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.log(`异步读取文件数据：${data.toString()}`);
//   });
// });
// End=========================

// 读取文件=========================
// const filePath = 'src/file/input.txt';
// const buf = new Buffer(1024);
// const openFlags = 'r+';

// console.log('准备打开已经存在的文件');
// fs.open(filePath, openFlags, (err, fd) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('文件打开成功');
//   console.log('准备读取文件');
//   fs.read(fd, buf, 0, buf.length, 0, (err, bytesRead) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log(`${bytesRead} 字节被读取`);

//     // 仅输出读取的字节
//     if (bytesRead > 0) {
//       console.log(buf.slice(0, bytesRead).toString());
//     }
//   });
// });
// End=========================

// 关闭文件fs.close =========================
// const filePath = 'src/file/input.txt';
// const buffer = new Buffer(1024);
// const openFlags = 'r+';

// console.log('准备打开已经存在的文件');
// fs.open(filePath, openFlags, (err, fd) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('文件打开成功');
//   console.log('准备读取文件');
//   fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log(`${bytesRead} 字节被读取`);

//     // 仅输出读取的字节
//     if (bytesRead > 0) {
//       console.log(buffer.slice(0, bytesRead).toString());
//     }

//     // 关闭文件
//     fs.close(fd, (err) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log('文件关闭成功');
//     });

//   });
// });
// End=========================

// 截取文件fs.ftruncate =========================
// const filePath = 'src/file/input.txt';
// const buffer = new Buffer(1024);
// const openFlags = 'r+';

// console.log('准备打开文件');
// // 1.打开文件
// fs.open(filePath, openFlags, (err, fd) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('文件打开成功');
//   console.log('准备截取10字节后的文件内容');

//   // 2.截取文件
//   fs.ftruncate(fd, 10, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('文件截取成功');
//     console.log('读取相同的文件');

//     // 3.读取文件
//     fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
//       if (err) {
//         console.log(err);
//       }

//       // 仅输出读取的字节
//       if (bytesRead > 0) {
//         console.log(buffer.slice(0, bytesRead).toString());
//       }

//       // 4.关闭文件
//       fs.close(fd, (err) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log('关闭文件成功!');
//       });
//     });
//   });
// });

// End=========================

// // 删除文件fs.unlink =========================
// const filePath = 'src/file/input.1.txt';
// const buffer = new Buffer(1024);
// const openFlags = 'r+';

// console.log('准备删除文件');
// fs.unlink(filePath, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('文件删除成功!');
// });
// End=========================

// 创建目录fs.mkdir =========================
// const filePath = 'src/file/test/';
// const buffer = new Buffer(1024);
// const openFlags = 'r+';

// console.log('准备创建目录 src/file/test/');
// // 创建目录
// fs.mkdir(filePath, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('目录创建成功');
// });
// End=========================

// 读取目录fs.readdir=========================
// const filePath = 'src/file/';

// console.log('准备查看目录 src/file/');
// fs.readdir(filePath, (err, files) => {
//   if (err) {
//     return console.error(err);
//   }
//   files.forEach((file) => {
//     console.log(file);
//   });
// });
// End=========================

// 删除目录fs.rmdir =========================
const directoryPath = 'src/file/test';

console.log('准备删除 src/file/test/');
fs.rmdir(directoryPath, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('目录删除成功');
});
// End=========================

console.log('程序执行完毕');

/**
 * 参考资料：
 * [runoob-NodeJS-fs](http://www.runoob.com/nodejs/nodejs-fs.html)
 * [NodeJS-fs](http://nodejs.cn/api/fs.html)
 * [fs.close](http://nodejs.cn/api/fs.html#fs_fs_close_fd_callback)
 * [fs.mkdir](http://nodejs.cn/api/fs.html#fs_fs_mkdir_path_mode_callback)
 * [fs.ftruncate](http://nodejs.cn/api/fs.html#fs_fs_ftruncate_fd_len_callback)
 * [fs.open](http://nodejs.cn/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback)
 * [fs.read](http://nodejs.cn/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback)
 * [fs.readFile](http://nodejs.cn/api/fs.html#fs_fs_open_path_flags_mode_callback)
 * [fs.readdir](http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback)
 * [fs.rmdir](http://nodejs.cn/api/fs.html#fs_fs_rmdir_path_callback)
 * [fs.stat](http://nodejs.cn/api/fs.html#fs_fs_stat_path_callback)
 * [fs.unlink](http://nodejs.cn/api/fs.html#fs_fs_unlink_path_callback)
 * [fs.writeFile](http://nodejs.cn/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback)
 */