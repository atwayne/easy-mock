const Koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");

const proxy = require("koa-proxy");
const logger = require('koa-logger');

const app = new Koa();
app.use(
  cors({
    origin: "*",
  })
);

app.use(logger());

const router = new Router();

const config = require("./config/default.json");
const { mocks } = config;

mocks.forEach((mock) => {
  const { path, data, method } = mock;
  router[method || "get"](path, (ctx) => {
    ctx.body = require(data);
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.use(
  proxy({
    host: config.proxy,
    jar: true,
  })
);

module.exports = app;
