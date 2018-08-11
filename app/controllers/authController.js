const { User } = require('../models');

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

  async register(req, res) {
    // req.body: informações enviadas pela view com POST
    const { email } = req.body;

    if (await User.findOne({ where: { email } })) {
      // string back serve para voltar para rota anterior, no cado o '/singup'
      return res.redirect('back');
    }

    await User.create(req.body);

    return res.redirect('/');
  },
};
