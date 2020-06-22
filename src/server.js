#!/usr/bin/env node
const opn = require("opn");

const config = require("./config/default.json");
const api = require("./api");
const portal = require("./portal");


const {
  app: { port, name },
  proxy,
} = config;

api.listen(port, (args) => {
  console.info(
    `API started on http://locahost:${port}. default proxy:${proxy}`
  );
});

// portal will start at a random port
const portalApp = portal.listen(0, () => {
  const portalHost = `http://localhost:${portalApp.address().port}/`;
  console.info(`portal started on ${portalHost}`);

  // launch portal
  opn(portalHost);
});
