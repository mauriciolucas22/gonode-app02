/**
 * se não existe a session de user deixa passar
 * se exite um usuario logado redireciona para dashboard
 */
module.exports = (req, res, next) => {
  if (!req.session.user) {
    return next();
  }

  return res.redirect('/app/dashboard');
};
