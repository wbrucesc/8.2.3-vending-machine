const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');


const app = express();
const router = require('./router');

app.use(bodyParser.json());

router(app); 

app.listen(3000);

module.exports = app;
