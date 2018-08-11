const express = require('express');

const routes = express.Router();

// import controllers
const userController = require('./controllers/userController');

routes.get('/', userController.index);

module.exports = routes;
