const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const routes = require('./app/routes');

// inport config de session
const sessionConfig = require('./config/session');

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
app.use(bodyParser.urlencoded({ extended: false })); // compreende os campos inputs
app.use(session(sessionConfig));
app.use(flash());
app.use(methodOverride('_method')); // config a chave passada na url, no method sempre fica POST

app.use('/', routes);

app.listen(3000);
