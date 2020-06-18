const koa = require("koa");
const app = new koa();

app.use((context) => {
  context.body = "ready";
});

module.exports = app;
