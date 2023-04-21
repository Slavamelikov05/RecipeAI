const parseRecipe = async (req, res, next) => {
  const response = res.locals.response;
  console.log('Loggnin ParseRecipe:  ', response.content);
  const parsedRes = response.content;

  res.locals.response = parsedRes;
  next();
};

module.exports = { parseRecipe };
