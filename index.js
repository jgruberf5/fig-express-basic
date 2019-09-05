#!/usr/bin/env node

/* jshint esversion: 6 */
/* jshint node: true */
'use strict';

const app = require('./app');
const http = require('http');

var port = process.env.PORT || '3000';

var server = http.createServer(app);
server.listen(port, () => console.log(`f5-express-basic listening on port ${port}`));

