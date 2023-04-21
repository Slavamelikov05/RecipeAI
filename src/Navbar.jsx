import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './pages/SignupPage';

const Navbar = ({
  isLoggedIn,
  handleLogout,
  fetchRecipe,
  setpageRecipe,
  pageRecipe,
}) => {
  const handleClick = async () => {
    await fetchRecipe(); // update the pageRecipe state
  };
  return (
    <nav className='navbar custom-navbar'>
      <div className='navbar-nav-left'>
        <Link className='navbar-brand' to='/'>
          RecipeAI
        </Link>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </div>
      <div className='navbar-nav-right'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
        {isLoggedIn ? (
          <>
            <Link className='nav-link' to='/recipes' onClick={handleClick}>
              My Recipes
            </Link>
            <button className='nav-link' onClick={handleLogout}>
              Sign out
            </button>
          </>
        ) : (
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
