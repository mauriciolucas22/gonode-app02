const { Category, Snippet } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const category = await Category.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Categoria criada com sucesso');

      return res.redirect(`/app/categories/${category.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const categories = await Category.findAll({
        include: [Snippet],
        where: {
          UserId: req.session.user.id,
        },
      });

      const snippets = await Snippet.findAll({
        // req.params.? tem acessos aos parametros da url
        where: { CategoryId: req.params.id },
      });

      return res.render('categories/show', {
        categories,
        snippets,
        activeCategory: req.params.id,
      });
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Category.destroy({ where: { id: req.params.activeCategory } });

      req.flash('success', 'Categoria deletada!');

      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },
};
