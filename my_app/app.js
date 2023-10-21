const express = require('express');
const app = express();

require('dotenv').config();

//* USE A BODY PARSER
app.use(express.json());

module.exports = app;
