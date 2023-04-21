import React from 'react';

import SearchBar from '../components/SearchBar';
import './HomePage.css';

const HomePage = ({ pageRecipe, setpageRecipe }) => {
  const randomRecipes = [
    {
      name: 'Spaghetti Carbonara',
      description:
        'A classic Italian pasta dish with creamy egg sauce, cheese, and bacon.',
      image: 'https://example.com/spaghetti-carbonara.jpg',
    },
    {
      name: 'Chicken Curry',
      description:
        'A flavorful and aromatic Indian dish with tender chicken pieces cooked in a spiced curry sauce.',
      image: 'https://example.com/chicken-curry.jpg',
    },
    {
      name: 'Tacos al Pastor',
      description:
        'A popular Mexican street food with marinated pork, pineapple, and fresh toppings served in a corn tortilla.',
      image: 'https://example.com/tacos-al-pastor.jpg',
    },
  ];

  return (
    <div className='maincontainer'>
      <div className='homepage-container'>
        <div className='text-center'>
          <h1 className='welcome-name'>Welcome to the Recipe Generator</h1>
          <p>Find unique recipes based on your preferences and ingredients.</p>
          <SearchBar pageRecipe={pageRecipe} setpageRecipe={setpageRecipe} />
        </div>
      </div>{' '}
    </div>
  );
};
export default HomePage;
