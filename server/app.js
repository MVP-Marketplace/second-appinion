const express = require("express"),
path = require('path'),
morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));


module.exports = app;