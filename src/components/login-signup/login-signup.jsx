import React from "react";
import './login-signup.css';

// Import the logos
import AUPP_Logo from '../assets/AUPP_Logo.png';
import Microsoft_Logo from '../assets/microsoft-logo.png'; 
import library from '../assets/library.jpg';

export default function LoginSignup() {
  return (
    <div className="login-signup-container">
      {/* Left side with the image */}
      <div className="image-container">
        <img src={library} alt="Library" />
        <div className="image-overlay">
          <h1 className="heading">Enhance your knowledge with AUPP library resources.</h1>
          <p className="description">Our chatbot will help your education by finding useful resources within a second.</p>
        </div>
      </div>

      {/* Right side with the login form */}
      <div className="login-signup-form-container">
        <div>
          <img className="logo" src={AUPP_Logo} alt="AUPP Logo" />
          <h2>Create an Account</h2>
        </div>

        {/* Continue with Microsoft Account button */}
        <a href="#" className="microsoft-btn">
          <img src={Microsoft_Logo} alt="Microsoft Logo" className="microsoft-logo" />
          Continue with Microsoft Account
        </a>

        <div className="divider-container">
          <div className="divider"></div>
          <span className="or-text">or</span>
          <div className="divider"></div>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
