const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const cookiesController = require('../controllers/cookiesController');
const authUsers = require('../controllers/authUsers');
const sessionController = require('../controllers/sessionController');
router.post('/createuser', AuthController.createUser, (req, res) => {
  res.status(200).send('User Created Successfully!');
});
router.post(
  '/login',
  AuthController.verifyUser,
  cookiesController.setSSIDCookie,
  (req, res) => {
    res.status(200).json({
      id: res.locals.id,
      error: res.locals.error,
    });
  }
);
module.exports = router;
