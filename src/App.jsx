// File: App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import SignupPage from './Pages/SignupPage';
import SigninPage from './Pages/SigninPage';
import ProfilePage from './Pages/ProfilePage';

const App = () => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/signin" element={<SigninPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default App;