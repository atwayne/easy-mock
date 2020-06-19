#!/usr/bin/env node
const app = require("./app");

const { port, name } = require("./config/default.json").app;

app.listen(
  port,
  () => console.info(`${name} started on http://locahost:${port}`) // eslint-disable-line no-console
);
