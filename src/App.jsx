import './App.css';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Navbar from './Navbar';
import SignupPage from './pages/SignupPage';
import RecipesPage from './pages/RecipePage';
import axios from 'axios';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInitialCheckDone, setIsInitialCheckDone] = useState(false);
  const [pageRecipe, setpageRecipe] = useState(null);
  const navigate = useNavigate();


  
  const fetchRecipe = async () => {
    try {
      const ssid = Cookies.get('ssid');
      if (ssid) {
        const response = await axios.get(`/api/getrecipe?ssid=${ssid}`);
        setpageRecipe(response.data);
        console.log(response.data);
      } else {
        console.error('SSID cookie not found');
      }
    } catch (error) {
      console.error('Error fetching recipe from database', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove('ssid');
    Cookies.remove('loggedIn');
    navigate('/');
  };

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const loggedIn = Cookies.get('loggedIn');
      console.log(loggedIn);
      if (loggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsInitialCheckDone(true);
    };

    checkLoggedInStatus();
  }, []);

  return isInitialCheckDone ? (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        fetchRecipe={fetchRecipe}
        setpageRecipe={setpageRecipe}
        pageRecipe={pageRecipe}
      />

      <div className='main-container'>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage pageRecipe={pageRecipe} setpageRecipe={setpageRecipe} />
            }
          />
          <Route path='/about' element={<AboutPage />} />
          <Route
            path='/login'
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <SignupPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path='/recipes'
            element={<RecipesPage pageRecipe={pageRecipe} />}
          />
        </Routes>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
