
// File: Pages/ProfilePage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import './ProfilePage.css';

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fullName, email, phone } = location.state || {};

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Account Settings</h2>

      <div className="profile-card">
        <div className="profile-top">
          <div className="avatar-wrapper">
            <img
              className="avatar"
              src="https://img.freepik.com/premium-photo/image-handsome-young-boy-character-generative-ai_849906-3908.jpg"
              alt="User Avatar"
            />
            <div className="edit-icon"> <FaCamera className="camera-icon" /></div>
          </div>
          <div className="profile-details">
            <h3>{fullName}</h3>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      <button className="btn logout-btn" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
};

export default ProfilePage;
