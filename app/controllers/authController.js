const { User } = require('../models');
const bcrypt = require('bcryptjs');

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
      // mostra a msg na tela
      req.flash('error', 'E-mail já cadastrado');

      // string back serve para voltar para rota anterior, no cado o '/singup'
      return res.redirect('back');
    }

    // bcrypt para password
    const password = await bcrypt.hash(req.body.password, 5);

    // passa as proprieade de req.body e sobreescreve o password
    await User.create({ ...req.body, password });

    req.flash('success', 'Usuário cadastrado com sucesso');
    return res.redirect('/');
  },
};
