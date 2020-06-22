const Koa = require("koa");
const serve = require("koa-static");

const portal = new Koa();
portal.use(serve(__dirname + "/static"));

module.exports = portal;
