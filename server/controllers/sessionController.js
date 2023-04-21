const Session = require('../models/sessionModel');
const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  const { id } = res.locals;
  const newSession = new Session({ cookieId: id });
  console.log('id in sessionstart', id);
  try {
    await newSession.save();
    res.locals.id = id;
    return next();
  } catch (err) {
    next({
      error: 'Error in sessionController.startSession middleware',
    });
  }
};
module.exports = sessionController;
