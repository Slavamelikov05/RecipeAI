import axios from 'axios';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email: loginData.email,
        password: loginData.password,
      });
      console.log(response.data);
      if (response.data.error) {
        // Handle the error message, e.g., show an error message to the user
        console.log(response.data.error);
      } else {
        setIsLoggedIn(true);
        history('/');
        // if (response.data) {
        //   ;
        //
        // }
      }
      // if (response.data) {
      //   setIsLoggedIn(true);
      //
      // }
    } catch (error) {
      console.log('Error in handleLoginSubmit', error);
    }
    // Use the loginData state to authenticate the user
  };

  return (
    <div className='login-container'>
      <div className='login-column'>
        <div className='login-block'>
          {' '}
          <div className='login-header'>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <label>Password:</label>
            <input
              type='password'
              name='password'
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <button type='submit'>Login</button>
            <div className='signup-link'>
              <p>
                Don't have an account? <Link to='/signup'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
