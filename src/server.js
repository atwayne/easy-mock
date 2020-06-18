const config = require("config");
const app = require("./app");

const port = config.get("port");
app.listen(
  port,
  () =>
    console.info(`${config.get("appName")} started on http://locahost:${port}`) // eslint-disable-line no-console
);
