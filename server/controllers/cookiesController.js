const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  const { id } = res.locals;
  res.cookie('ssid', `${id}`);
  res.locals.id = id;
  console.log(' SetSSIDCOOKIE', res.locals.id);

  res.cookie('loggedIn', 'true', {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    sameSite: 'strict',
    path: '/',
  });
  return next();
};

module.exports = cookieController;
