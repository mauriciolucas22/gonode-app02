// const { User } = require('../models');

module.exports = {
  /* async index(req, res) {
    const users = await User.findAll();
    res.render('index', { users });
  }, */
  singin(req, res) {
    return res.render('auth/singin');
  },

  singup(req, res) {
    return res.render('auth/singup');
  },
};
