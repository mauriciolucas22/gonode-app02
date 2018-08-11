const express = require('express');

const routes = express.Router();

// import controllers
const authController = require('./controllers/authController');

// middleware executado em todas as telas
routes.use((req, res, next) => {
  // locals são variaveis passas para as views
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

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
