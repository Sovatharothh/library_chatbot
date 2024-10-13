import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane, faHistory, faComment, faBroom, faCircle } from '@fortawesome/free-solid-svg-icons';

import './chatpage.css';
import AUPP_Logo from '../assets/AUPP_Logo.png';
import engle from '../assets/engle.png';

export default function ChatPage() {
  const [currentTab, setCurrentTab] = useState('Main');
  const [attemptCount, setAttemptCount] = useState(0); // Tracks user attempts (up to 5)
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Complete chat history (user + bot)
  const [currentMessage, setCurrentMessage] = useState(''); // Current message input
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [viewingAttempt, setViewingAttempt] = useState(null); // Tracks which attempt the user is viewing

  const chatEndRef = useRef(null); // Reference to the chat area end for auto-scrolling

  // Scroll to the bottom of the chat when a new message is added
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setViewingAttempt(null); // Reset viewing attempt when switching tabs
  };

  // Function to handle sending the message (user attempt)
  const handleNextAttempt = async () => {
    if (currentMessage.trim() === '') return; // Ignore empty messages
    if (attemptCount >= 5) return; // User cannot send more than 5 attempts

    const userMessage = { sender: 'user', text: currentMessage };
    const updatedHistory = [...chatHistory, userMessage]; // Append user's message to history
    setChatHistory(updatedHistory); // Update history
    setCurrentMessage(''); // Clear input field

    // Call the backend for the bot's response
    setIsLoading(true); // Show loading state
    try {
      const response = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Use plain text format
        },
        body: currentMessage, // Send the message directly as plain text
      });

      const chatbotResponse = await response.text(); // Get the response as plain text
      console.log('Bot response:', chatbotResponse); // Log bot response for debugging
      const botResponse = { sender: 'bot', text: chatbotResponse }; // Create bot's message
      setChatHistory((prev) => [...prev, botResponse]); // Append bot's message to history

      // Only increase the attempt count after both the user message and bot response are stored
      setAttemptCount((prev) => prev + 1); // Increment attempt count
    } catch (error) {
      console.error('Error fetching bot response:', error); // Log errors
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Clear chat history and reset attempt count
  const clearChat = () => {
    setChatHistory([]);
    setAttemptCount(0); // Reset attempts to 0
    setViewingAttempt(null); // Reset viewing attempt
  };

  // Detect if the user is on mobile and adjust the step size for positioning elements
  const isMobile = window.innerWidth < 768;
  const stepSize = isMobile ? 30 : 45;
  const initialRightOffset = 75;
  const rightPosition = initialRightOffset + attemptCount * stepSize;

  // Reusable component for displaying messages
  const renderChatMessages = () => {
    let filteredMessages = chatHistory;

    // If viewing a specific attempt, filter messages up to that attempt
    if (viewingAttempt !== null) {
      filteredMessages = chatHistory.slice(0, (viewingAttempt + 1) * 2); // Each attempt consists of 1 user + 1 bot message
    }

    return (
      <div className="chat-display">
        {filteredMessages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          filteredMessages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))
        )}
        {isLoading && <div className="chat-message bot-message">Bot is typing...</div>}
        <div ref={chatEndRef}></div> {/* Ensure auto-scroll */}
      </div>
    );
  };

  return (
    <div className="chatpage-container">
      {/* Navbar */}
      <div className="navbar">
        <button
          className={`hamburger-btn ${sidebarVisible ? 'sidebar-open' : ''}`}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="circle-container">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`nav-circle ${attemptCount > (4 - index) ? 'active' : ''}`}
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
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>

          <div className="sidebar-header">
            <h2>{currentTab}</h2>
          </div>

          {/* Attempts */}
          <div className="attempt-container">
            {/* Display all 5 attempt boxes, use lighter color for unfilled */}
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`attempt-box ${attemptCount > index ? `filled ${index % 2 === 0 ? 'blue' : 'red'}` : (index % 2 === 0 ? 'blue-light' : 'red-light')}`}
                onClick={() => {
                  setViewingAttempt(index); // Set viewingAttempt to the clicked attempt
                  setCurrentTab('History'); // Switch to History tab
                }}
              >
                <div className="attempt-frame">
                  <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                  <p>{`History ${index + 1}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
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
            {chatHistory.length === 0 ? (
              <>
                <img className="logo" src={AUPP_Logo} alt="AUPP Logo" />
                <h2>Welcome to AUPP Library Chatbot</h2>
              </>
            ) : (
              renderChatMessages()
            )}
          </div>
        ) : (
          // History tab chat display (same structure as Main)
          renderChatMessages()
        )}

        <div className="chat-input">
          <input
            type="text"
            placeholder={attemptCount >= 5 ? 'Limit reached. Clear chat to start over.' : 'Type a message...'}
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            disabled={attemptCount >= 5 || isLoading}
          />
          <div className="clear-container" onClick={clearChat}>
            <FontAwesomeIcon icon={faBroom} className="clear-icon" /> clear
          </div>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`send-icon ${attemptCount >= 5 || isLoading ? 'disabled' : ''}`}
            onClick={handleNextAttempt}
          />
        </div>
      </div>
    </div>
  );
}
