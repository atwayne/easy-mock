## Introduction

a node.js application that mocks api based on configuration

## Features

1.  mock response

    configure routers so the api respond with provide json file, for example:

    ```
    { "path": "/example", "data": "./data/example.json", "method": "get" }
    ```

    then a request `GET /example` will get response with content of the file `./data/example.json`


2.  default proxy

    for all requests to a path that has not been defined in previous configuration, the api will work as a proxy and redirect the request to a specificed proxy server.

    for example: given that `"proxy": "http://localhost:9528"` has been set, and path `/api/element/1` has not been mocked, then a request `GET /api/element/1` will be proxied to `http://localhost:9528/api/element/1` and get response from the proxy server.

3.  cors allowed for all origins

## Usage

1.  `npm install`
2.  locate `./src/config/default.json` for configuration
3.  (optional) modify `app.port` to the port you want to host the mock api
4.  (optional) modify `proxy` to the hostname of the proxy server, which will handle unrouted requests
5.  update `routers` for mocks
6.  `npm start`

## Development plan

-  creat a webpage so user can configure in browser
-  reload routers without restarting the api server
