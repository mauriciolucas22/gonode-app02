const express = require('express');

const routes = express.Router();

// import controllers
const authController = require('./controllers/authController');

routes.get('/', authController.singin);
routes.get('/singup', authController.singup);

/**
 * GET: busca informações do server
 * POST: quando cria novas informações, EX: form de cadastro
 * PUT: quando edita uma informação, EX: edição de snippets
 * DELETE: ...
 */
routes.post('/register', authController.register);

module.exports = routes;
