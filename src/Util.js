const util = require('util');

// util.inspect 返回Object对象的字符串表示
const Person = {Name: '张三', age: 23, gender: '男'}
const personStr = util.inspect(Person);
console.log(`类型：${typeof personStr}`); // string
console.log(`对象的字符串表示：${personStr}`); // { Name: '张三', age: 23, gender: '男' }

/**
 * 参考文档：
 * [runoob-NodeJS常用工具](http://www.runoob.com/nodejs/nodejs-util.html)
 * [npm-util](https://www.npmjs.com/package/util)
 * [NodeJS-util](http://nodejs.cn/api/util.html)
 * [util.inspect](http://nodejs.cn/api/util.html#util_util_inspect_object_options)
 */