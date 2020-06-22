#!/usr/bin/env node
const app = require("./app");
const portal = require("./portal");
const config = require("./config/default.json");

const opn = require("opn");

const {
  app: { port, name },
  proxy,
} = config;

const instance = app.listen(port, (args) => {
  console.info(
    `${name} started on http://locahost:${port}. default proxy:${proxy}`
  );
  console.log(instance.address().port);
});

// portal will start at a random port
const portalApp = portal.listen(0, () => {
  const portalHost = `http://localhost:${portalApp.address().port}/`;
  console.info(`portal started on ${portalHost}`);

  // launch portal
  opn(portalHost);
});
