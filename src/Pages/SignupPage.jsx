import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, agency } = formData;
    if (!fullName || !phone || !email || !password || !agency) {
      setError('Please fill all required fields.');
      return;
    }
    navigate('/signin', { state: formData });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create your PopX account</h2>

      <div className="input-wrapper">
        <label className="floating-label1">Full Name*</label>
        <input type="text" name="fullName" placeholder="Marry Doe" value={formData.fullName} onChange={handleChange} />
      </div>

      <div className="input-wrapper">
        <label className="floating-label1">Phone number*</label>
        <input type="text" name="phone" placeholder="Marry Doe" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="input-wrapper">
        <label className="floating-label1">Email address*</label>
        <input type="email" name="email" placeholder="Marry Doe" value={formData.email} onChange={handleChange} />
      </div>

      <div className="input-wrapper">
        <label className="floating-label1">Password *</label>
        <input type="password" name="password" placeholder="Marry Doe" value={formData.password} onChange={handleChange} />
      </div>

      <div className="input-wrapper">
        <label className="floating-label1">Company name</label>
        <input type="text" name="company" placeholder="Marry Doe" value={formData.company} onChange={handleChange} />
      </div>

      <div className="radio-group">
        <p className="radio-label">Are you an Agency?*</p>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === 'Yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === 'No'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      {error && <p className="form-error">{error}</p>}

      <button className="btn-primary2" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
};

export default SignupPage;
