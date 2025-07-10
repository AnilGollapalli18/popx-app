// File: SigninPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SigninPage.css';

const SigninPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

 const handleSubmit = () => {
  const { email, password } = formData;

  // Get registered data from previous page
  const registeredData = history.state?.usr; // or useLocation().state if routing setup allows

  if (!email || !password) {
    setError('Please fill all required fields.');
    return;
  }

  if (
    registeredData &&
    email === registeredData.email &&
    password === registeredData.password
  ) {
    navigate('/profile', { state: registeredData });
  } else {
    setError('Incorrect email or password');
  }
};


  return (
    <div className="signin-container">
      <h2 className="signin-title">Signin to your PopX account</h2>
      <p className="sign-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="input-wrapper4">
        <label className="floating-label3">Email address*</label>
        <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
      </div>

      <div className="input-wrapper4">
        <label className="floating-label3">Password *</label>
        <input type="password" name="password"  placeholder="Enter password" value={formData.password} onChange={handleChange} />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button className="btn primary3" onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default SigninPage;
