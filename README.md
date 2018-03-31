## NodeJs学习，源于runoob.com目录，参照runoob的文档和NodeJS官方文档
> PS: 学习笔记，里面的有些内容仅是自己的理解，如果有问题，热烈欢迎使用提Issue方式留言。o(╯□╰)o(Take notes. Some of the contents are just my own understanding. If there is any problem, please give me a warm welcome.)

****

> 使用方式(Use Method):

+ step1
```cmd
npm install
```

+ step2 按需使用Node执行src下面的文件。例如
```cmd
node src/Stream.js
```
+ 端口开启在: 8888
+ 笔记环境
  + os: win10专业版
  + node version: v8.10.0
  + npm version: 5.6.0

****

> LastUpdateTime: 20180401

> v0.0.1(A: 增加; B: 优化; F: 修复; N: 说明)
  + A 解决中文乱码问题
  + N 出现的某种参数注释学习
    + 像这样: size[, fill[, encoding]]
      + 有左才有右, 没左没有右
      + 分号放方括号里面，是说分号和后面那个参数是一起的
      + 这里size必填, fill选填, encoding选填
        + size有, fill没有
        + size有, fill有, encoding没有
        + siz有, fill有, encoding有


****
```
├─mayClassStructure.md // NodeJS结构梳理
├─package-lock.json 
├─package.json
├─README.md
├─tree.txt
├─src
|  ├─HelloWorld.js // [0001]
|  ├─Buffer.js // 缓存区
|  ├─Callback.js // 回调函数风格
|  ├─EventEmitter.js // 事件处理
|  ├─Function.js // 函数
|  ├─Module.js // 模块
|  ├─Stream.js // 流
|  ├─file // NodeJS读取文件，压缩解压缩等资源文件夹
|  |  ├─input.txt
|  |  ├─input.txt.gz
|  |  ├─input.txt.zip
|  |  ├─input_decompress.txt
|  |  ├─input_decompress_result.txt
|  |  ├─output.txt
|  |  └pipe.txt
```