/**
 * se não existe a session deixa passar
 */
module.exports = (req, res, next) => {
  if (!req.session.user) {
    return next();
  }

  return res.redirect('/app/dashboard');
};
