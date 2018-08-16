const express = require('express');

const routes = express.Router();

// import middlewares
const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

// import controllers
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const categoryController = require('./controllers/categoryController');

// middleware executado em todas as telas
routes.use((req, res, next) => {
  // locals são variaveis passas para as views
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

/**
 * Auth
 */
routes.get('/', guestMiddleware, authController.singin);
routes.get('/singup', guestMiddleware, authController.singup);
routes.get('/singout', authController.singout);

/**
 * Dashboard
 */
routes.get('/app/dashboard', dashboardController.index);
// define middleware para todas as rotas que comecem com /app
routes.use('/app', authMiddleware);

/**
 * Categoria
 */
routes.post('/app/categories/create', categoryController.store);
routes.get('/app/categories/:id', categoryController.show);


/**
 * GET: busca informações do server
 * POST: quando cria novas informações, EX: form de cadastro
 * PUT: quando edita uma informação, EX: edição de snippets
 * DELETE: ...
 */
routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

// middleware 404
routes.use((req, res) => res.render('errors/404'));

/**
 * middlewares de error
 * devem receber 4 parâmetros: err, req, res, next
*/

routes.use((err, req, res, _next) => {
  /**
   * req.status: recebe o status de HTTP
   * 500: error de servidor
   *
   * se ambiente de produção nao mostra o erro
   */
  res.status(err.status || 500);
  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;
