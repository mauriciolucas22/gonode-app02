const express = require('express');

const routes = express.Router();

// import middleware auth
const authMiddleware = require('./middlewares/auth');

// import controllers
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');

// define middleware para todas as rotas que comecem com /app
routes.use('/app', authMiddleware);

// middleware executado em todas as telas
routes.use((req, res, next) => {
  // locals são variaveis passas para as views
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.get('/', authController.singin);
routes.get('/singup', authController.singup);
routes.get('/singout', authController.singout);
routes.get('/app/dashboard', dashboardController.index);

/**
 * GET: busca informações do server
 * POST: quando cria novas informações, EX: form de cadastro
 * PUT: quando edita uma informação, EX: edição de snippets
 * DELETE: ...
 */
routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

module.exports = routes;
