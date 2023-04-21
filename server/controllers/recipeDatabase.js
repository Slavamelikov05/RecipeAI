const { Recipe, User } = require('../models/userModel');

const saveController = {};

saveController.saveRecipe = async (req, res, next) => {
  const { name, ingredients, instructions, cookieId } = req.body;
  console.log(req.body);
  try {
    if (name && ingredients && instructions && cookieId) {
      const newRecipe = await Recipe.create({
        name,
        ingredients,
        instructions,
        cookieId,
      });

      const user = await User.findOne({ _id: cookieId });
      if (!user) {
        throw new Error('User not found');
      }
      console.log('Logging user', user);
      user.recipies.push({ title: name, id: newRecipe._id });
      await user.save();

      return next();
    } else {
      throw new Error('Missing name, ingredients, or instructions');
    }
  } catch (err) {
    next({
      log: ' Express error handler caught saveRecipe middleware error',
      status: 400,
      message: { err: err.message },
    });
  }
};

saveController.getRecipe = async (req, res, next) => {
  const ssid = req.query.ssid;

  try {
    const user = await User.findOne({ _id: ssid }).select('recipies');
    if (!user) {
      throw new Error('User not found, unable to get recipe');
    }
    const recipeUserIds = user.recipies.map((recipe) => recipe.id);
    const recipes = await Recipe.find({ _id: { $in: recipeUserIds } });
    res.locals.recipes = recipes;
    return next();
  } catch (err) {
    next({
      log: 'Express error handler caught getRecipe middleware error',
      status: 400,
      message: { err: err.message },
    });
  }
};
// saveController.getRecipe = async (req, res, next) => {
//   const ssid = req.query.ssid;

//   try {
//     const user = await User.findOne({ _id: ssid }).populate({
//       path: 'recipies',
//       model: 'Recipe',
//     });

//     if (!user) {
//       throw new Error('User not found, unable to get recipe');
//     }

//     const recipes = user.recipies.map((recipe) => {
//       return {
//         _id: recipe._id,
//         name: recipe.name,
//         ingredients: recipe.ingredients,
//         instructions: recipe.instructions,
//       };
//     });

//     res.locals.recipes = recipes;
//     return next();
//   } catch (err) {
//     next({
//       log: 'Express error handler caught getRecipe middleware error',
//       status: 400,
//       message: { err: err.message },
//     });
//   }
// };
module.exports = saveController;
