'use strict';
const http = require('http');
const router = require('./lib/router');
const server = http.createServer((req, res) => {
  router.route(req, res);
}).on('error', (e) => {
  console.error('server Error', e);
}).on('clientError', (e) => {
  console.error('Client Erroe', e);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
