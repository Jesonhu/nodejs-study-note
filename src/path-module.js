const path = require('path');

// path.normalize 会规范化给定的 path，并解析 '..' 和 '.' 片段。
// const p = '/test//test1//2xxx/tab/..';
// console.log(`normalization: ${path.normalize(p)}`); // \test\test1\2xxx

// path.join方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
// const p1 = '/test';
// const p2 = 'test1';
// const p3 = '2xxx';
// const p4 = 'tab';
// const p5 = '...';
// console.log(`joint path: ${path.join(p1, p2, p3, p4, p5)}`); // \test\test1\2xxx\tab\...

// path.resolve 会把一个路径或路径片段的序列解析为一个绝对路径。
// const p = 'index.js';
// console.log(`resolve: ${path.resolve(p)}`); // E:\Web\NodeJs\study\runoob\code\v0.0.1\index.js

// path.extname 方法返回 path 的扩展名
// const p = 'index.js';
// console.log(`ext name: ${path.extname(p)}`);

/**
 * Node.js Path模块
 * [runoob-path](http://www.runoob.com/nodejs/nodejs-path-module.html)
 * [path-路径](http://nodejs.cn/api/path.html)
 * [path.extname](http://nodejs.cn/api/path.html#path_path_extname_path)
 * [path.join](http://nodejs.cn/api/path.html#path_path_join_paths)
 * [path.normalize](http://nodejs.cn/api/path.html#path_path_normalize_path)
 * [path.resolve](http://nodejs.cn/api/path.html#path_path_resolve_paths)
 */