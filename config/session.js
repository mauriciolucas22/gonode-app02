/**
 * configurações para session
 * secret: senha para criptografar a sessão
 * resave e saveUnitilized são obrigatorias
 */

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../app/models'); // obtem a conexão do banaco

module.exports = {
  secret: 'snippetfy2018Jesus',
  resave: false,
  saveUninitialized: false, // false: cria a session somente quando o user logar, se true ele cria session no branco mesmo sem o user logar
  store: new SequelizeStore({
    db: sequelize, // conexão do banco
  }),
};
