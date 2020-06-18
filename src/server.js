const config = require("config");
const app = require("./app");

const port = config.get("app.port");
app.listen(
  port,
  () =>
    console.info(`${config.get("app.name")} started on http://locahost:${port}`) // eslint-disable-line no-console
);
