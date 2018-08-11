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

  async authenticate(req, res) {
    // obtem email e password da view
    const { email, password } = req.body;

    // obtem email no banco de dados
    // chamada é  assincrona, antão use await
    const user = await User.findOne({ where: { email } });

    // verifica se existe
    if (!user) {
      req.flash('error', 'Usuário inexistente');
      // sempre use return, se não ele segue o codigo
      return res.redirect('back');
    }

    /**
     * verifica se as senhas não batem
     * password: vem da view
     * user.password: obtida do banco de dados
     */
    if (!await bcrypt.compare(password, user.password)) {
      req.flash('error', 'Senha incorreta');
      return res.redirect('back');
    }

    /**
     * se senha for correta
     * cria session para user
     */
    req.session.user = user;

    // salva session usando callback
    return req.session.save(() => {
      res.redirect('app/dashboard');
    });
  },
};
