const Koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");

const config = require("config");

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

module.exports = app;
