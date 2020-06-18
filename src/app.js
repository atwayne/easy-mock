const Koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");

const config = require("config");
const proxy = require("koa-proxy");

const app = new Koa();
app.use(
  cors({
    origin: "*",
  })
);

const router = new Router();

const mocks = config.get("routers");

mocks.forEach((mock) => {
  const { path, data, method } = mock;
  router[method || "get"](path, (ctx) => {
    ctx.body = require(data);
  });
});

app.use(router.routes()).use(router.allowedMethods());

const proxy_host = config.get("proxy");
app.use(proxy({
  host: proxy_host,
  jar: true,
}));

module.exports = app;
