const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const recipeParser = require('../controllers/recipeParser');
const saveController = require('../controllers/recipeDatabase');
router.post(
  '/recipes',
  recipeController.genRecipe,
  recipeParser.parseRecipe,
  (req, res) => {
    res.status(200).json(res.locals.response);
  }
);

router.post('/saverecipe', saveController.saveRecipe, (req, res) => {
  res.status(200).send('Recipe Saved!');
});

router.get('/getrecipe', saveController.getRecipe, (req, res) => {
  res.status(200).json(res.locals.recipes);
});
module.exports = router;
