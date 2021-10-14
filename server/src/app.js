const { urlencoded } = require('express');
const express = require('express');
const dev = require('./config');
const app = express();
const router = require('./routes/cartas.routes');

let port;

//settings
app.set('port', dev.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;
