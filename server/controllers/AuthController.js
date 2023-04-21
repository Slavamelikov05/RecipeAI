const { User } = require('../models/userModel');
const bcrypt = require('bcrypt');
const AuthController = {};

AuthController.createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (name && password && email) {
      await User.create({ name, email, password });
      next();
    } else {
      throw new Error('Missing name, email, or password');
    }
  } catch (err) {
    next({
      log: 'Express error handler caught createUser middleware error',
      status: 400,
      message: { err: err.message },
    });
  }
};

AuthController.verifyUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.locals.error = 'Incorrect email';
    return next();
  }

  if (password === user.password) {
    console.log('id in verifyUser', user._id);
    res.locals.id = user._id;
    return next();
  } else {
    res.locals.error = 'Incorrect password';
    return next();
  }
};
module.exports = AuthController;
