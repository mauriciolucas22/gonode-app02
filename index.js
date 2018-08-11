const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./app/routes');

const app = express();

// config app
app.use(express.static(path.resolve('app', 'public')));

// imports de models: retornas todos os models criados
// const { User } = require('./app/models');

// User.create({ name: 'DEUS', email: '@GOD', password: '123' });

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');

// compreende os campos inputs
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000);
