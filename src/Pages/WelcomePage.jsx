// File: Pages/WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import bgImage from '../assets/img1.jpeg'; 

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
       <img src={bgImage} alt="Logo" className="welcome-logo" />
      <h2 className="welcome-title">Welcome to PopX</h2>
      <p className="welcome-sub1">It only takes a minute to get started , have a good day ☺</p>

      <button className="btn primary" onClick={() => navigate('/signup')}>
        Create Account
      </button>

      <button className="btn secondary" onClick={() => navigate('/signin')}>
        Already Registered? Sign In
      </button>
    </div>
  );
};

export default WelcomePage;