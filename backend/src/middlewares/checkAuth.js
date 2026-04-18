export function checkAuth(req, res, next) {
  if (req.session.isAuth) {
    return next();
  }
  return res.sendStatus(401);
}
