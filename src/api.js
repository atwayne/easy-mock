const Koa = require("koa");
const cors = require("@koa/cors");

const proxy = require("koa-proxy");
const logger = require("koa-logger");

const app = new Koa();
const mockRouters = require("./routers/mocks");
// enable cors
app.use(
  cors({
    origin: "*",
  })
);

// console logger
app.use(logger());

// dynamic router for mocks
app.use(mockRouters);

const proxyHost = require("./config/default.json").proxy;
app.use(
  proxy({
    host: proxyHost,
    jar: true,
  })
);

module.exports = app;
