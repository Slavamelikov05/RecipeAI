import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';
import axios from 'axios';

const SignupPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useNavigate();
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/createuser', {
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
      });

      if (response.data) {
        setIsLoggedIn(true);
        history('/');
      }
      console.log(response.data);
    } catch (error) {
      alert('Email already in use!');
      console.log('Error in handleSignupSubmit', error);
    }

    // Use the signupData state to create a new user account
  };

  const passwordMatch = signupData.password === signupData.confirmPassword;

  return (
    <div className='signup-container'>
      <div className='signup-header'>
        <h1>Signup</h1>
      </div>
      <div className='signup-column'>
        <div className='signup-block'>
          <form onSubmit={handleSignupSubmit}>
            <h2>Create an account</h2>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={signupData.name}
              onChange={handleSignupChange}
              required
            />
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={signupData.password}
              onChange={handleSignupChange}
              minLength={6}
              required
            />
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              minLength={6}
              required
            />
            {!passwordMatch && (
              <p className='password-mismatch'>Passwords do not match</p>
            )}
            <button type='submit' disabled={!passwordMatch}>
              Create Account
            </button>
          </form>
        </div>
      </div>
      <div className='login-link'>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
