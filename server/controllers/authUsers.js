const authUser = {};
authUser.authenticateUser = (req, res, next) => {
  if (res.locals.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
module.exports = authUser;
