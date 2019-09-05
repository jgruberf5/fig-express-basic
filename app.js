/* jshint esversion: 6 */
/* jshint node: true */
'use strict';

const express = require('express');

const app = express();

app.get('/fig-express-basic', (req, res) => res.send('Hello f5-icontrol-gateway programmer!'));

module.exports = app;