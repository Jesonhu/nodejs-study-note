// 实例：路由使用=========================
const server = require('./src/Router');
const router = require('./src/router/router');

server.start(router.route);
// End=========================