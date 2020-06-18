const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/example", (ctx, next) => {
  var response = require("./data/example.json");
  ctx.body = response;
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
