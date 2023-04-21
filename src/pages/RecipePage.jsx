import React from 'react';
import './RecipePage.css';

const RecipesPage = ({ pageRecipe }) => {
  console.log(pageRecipe);
  const renderRecipes = () => {
    if (!pageRecipe || pageRecipe.length === 0) {
      return <p>Loading recipes...</p>;
    }

    return pageRecipe.map((recipe, index) => (
      <div className='recipe-card' key={index}>
        <h2 className='recipe-name'>{recipe.name}</h2>
        <div className='recipe-ingredients'>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='recipe-instructions'>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    ));
  };

  return (
    <div className='recipes-page'>
      <h1 className='recipes-page-title'>My Recipes</h1>
      <div className='recipes-container'>{renderRecipes()}</div>
    </div>
  );
};

export default RecipesPage;
