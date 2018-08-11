const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

// imports de models: retornas todos os models criados
const { User } = require('./app/models');

User.create({ name: 'Jesus', email: '@jesus', password: '123' });

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
