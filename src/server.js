#!/usr/bin/env node
const app = require("./app");
const config = require("./config/default.json");

const {
  app: { port, name },
  proxy,
} = config;

app.listen(port, () =>
  console.info(
    `${name} started on http://locahost:${port}. default proxy:${proxy}`
  )
);
