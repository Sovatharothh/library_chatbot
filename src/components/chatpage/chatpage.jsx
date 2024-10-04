import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane, faHistory, faComment, faBroom, faCircle } from '@fortawesome/free-solid-svg-icons';

import './chatpage.css';
import AUPP_Logo from '../assets/AUPP_Logo.png';
import engle from '../assets/engle.png';

export default function ChatPage() {
  const [currentTab, setCurrentTab] = useState('Main');
  const [attemptCount, setAttemptCount] = useState(1);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to toggle sidebar

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleNextAttempt = () => {
    setAttemptCount((prev) => (prev < 6 ? prev + 1 : prev));
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  const stepSize = 45; // Distance between the centers of two consecutive nav-circles
  const initialRightOffset = 75; // attempt-icon first position

  // Calculate the right position based on the attempt count
  const rightPosition = initialRightOffset + (attemptCount - 1) * stepSize; 
  
  return (
    <div className="chatpage-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Hamburger Button for Mobile */}
        <button 
          className={`hamburger-btn ${sidebarVisible ? 'sidebar-open' : ''}`} 
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* User Info (Hidden on Mobile) */}
        <div className="user-info">
          <button className="user-profile"></button>
        </div>
        <div className="circle-container">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`nav-circle ${attemptCount > 5 - index ? 'active' : ''}`}
            ></div>
          ))}
        </div>
        <div className="attempt-icon" style={{ right: `${rightPosition}px` }}>
          <img className="engle" src={engle} alt="engle" />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>{currentTab}</h2>
          </div>

          {/* Attempts */}
          <div className="attempt-container">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`attempt-box ${index % 2 === 0 ? 'blue' : 'red'}`}
              >
                <div className="attempt-frame">
                  <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                  <p>History {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs - Placed at the bottom */}
        <div className="tabs">
          <div className="button-wrapper">
            <button
              className={`tab-button ${currentTab === 'History' ? 'on' : 'off'}`}
              onClick={() => handleTabClick('History')}
            >
              <FontAwesomeIcon icon={faHistory} /> History
            </button>
            <button
              className={`tab-button ${currentTab === 'Main' ? 'on' : 'off'}`}
              onClick={() => handleTabClick('Main')}
            >
              <FontAwesomeIcon icon={faComment} /> Main
            </button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        {currentTab === 'Main' ? (
          <div className="welcome-page">
            <img className="logo" src={AUPP_Logo} alt="AUPP Logo" />
            <h2>Welcome to AUPP Library Chatbot</h2>
          </div>
        ) : (
          <div className="history-page"></div>
        )}
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <div className="clear-container">
            <FontAwesomeIcon icon={faBroom} className="clear-icon" /> clear
          </div>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="send-icon"
            onClick={handleNextAttempt}
          />
        </div>
      </div>
    </div>
  );
}
