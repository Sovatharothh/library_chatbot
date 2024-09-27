import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './login-signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Import the logos
import AUPP_Logo from '../assets/AUPP_Logo.png';
import Microsoft_Logo from '../assets/microsoft-logo.png'; 
import library from '../assets/library.jpg';

export default function LoginSignup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };

  return (
    <div className="login-signup-container">
      <div className="image-container">
        <img src={library} alt="Library" />
        <div className="image-overlay">
          <h1 className="heading">Enhance your knowledge with AUPP library resources.</h1>
          <p className="description">Our chatbot will help your education by finding useful resources <br></br>within a second.</p>
        </div>
      </div>

      <div className="login-signup-form-container">
        <div>
          <img className="logo" src={AUPP_Logo} alt="AUPP Logo" />
          <h2>Create an Account</h2>
        </div>

        <a href="#" className="microsoft-btn">
          <img src={Microsoft_Logo} alt="Microsoft Logo" className="microsoft-logo" />
          Continue with Microsoft Account
        </a>

        <div className="divider-container">
          <div className="divider"></div>
          <span className="or-text">or</span>
          <div className="divider"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your school account"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                autoComplete="current-password"
                placeholder="password..."
                required
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} style={{ fontSize: '12px' }} />
              </span>
            </div>
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
