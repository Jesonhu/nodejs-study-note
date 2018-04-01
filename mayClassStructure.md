## node可能的类结构(自己猜想，未经考证)

+ EventEmitter
  + Stream--是EventEmitter的实例
  + process--是EventEmitter的实例

>类继承
+ net.Server
  + http.Server 