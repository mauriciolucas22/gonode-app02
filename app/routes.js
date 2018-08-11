const express = require('express');

const routes = express.Router();

// import controllers
const authController = require('./controllers/authController');

routes.get('/', authController.singin);
routes.get('/singup', authController.singup);

module.exports = routes;
