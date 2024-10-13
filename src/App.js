// 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/login-signup/login-signup.jsx'; 
import ChatPage from './components/chatpage/chatpage.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
