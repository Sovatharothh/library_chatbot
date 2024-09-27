// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane, faHistory, faComment } from '@fortawesome/free-solid-svg-icons';
// import './chatpage.css';

// // Import the logos
// import AUPP_Logo from '../assets/AUPP_Logo.png';
// import engle from '../assets/engle.png';

// export default function ChatPage() {
//   const [currentTab, setCurrentTab] = useState('Main');

//   const handleTabClick = (tab) => {
//     setCurrentTab(tab);
//   };

//   return (
//     <div className="chatpage-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="sidebar-content">
//           <div className="sidebar-header">
//             <h2>{currentTab}</h2>
//           </div>

//           {/* Attempts */}
//           {[...Array(5)].map((_, index) => (
//             <div 
//               key={index} 
//               className={`attempt-box ${index % 2 === 0 ? 'blue' : 'red'}`}
//             >
//               <div className="attempt-frame">
//                 <p>{index + 1} Attempt</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tabs - Placed at the bottom */}
//         <div className="tabs">
//           <div className="button-wrapper">
//             <button 
//               className={`tab-button-history ${currentTab === 'History' ? 'active' : ''}`}
//               onClick={() => handleTabClick('History')}
//             >
//               <FontAwesomeIcon icon={faHistory} /> History
//             </button>
//             <button 
//               className={`tab-button-main ${currentTab === 'Main' ? 'active' : ''}`}
//               onClick={() => handleTabClick('Main')}
//             >
//               <FontAwesomeIcon icon={faComment} /> Main
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="navbar">
//         <div className="user-info">
//           <button className='user-profile'></button>
//         </div>

//         <div className='attempt-icon'>
//           <img className="engle" src={engle} alt="engle" />
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="chat-area">
//         {currentTab === 'Main' ? (
//           <div className='welcome-page'>
//             <img className="logo" src={AUPP_Logo} alt="AUPP Logo" />
//             <h2>Welcome to AUPP Library Chatbot</h2>
//           </div>
//         ) : (
//           <div className="history-page">
//             <h2>History</h2>
//             <p>Your previous chat history will appear here...</p>
//           </div>
//         )}
//         <div className="messages">
//           {/* Messages will go here */}
//         </div>
//         <div className="chat-input">
//           <input type="text" placeholder="Type a message..." />
//           <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHistory, faComment } from '@fortawesome/free-solid-svg-icons';
import './chatpage.css';

// Import the logos
import AUPP_Logo from '../assets/AUPP_Logo.png';
import engle from '../assets/engle.png';

export default function ChatPage() {
  const [currentTab, setCurrentTab] = useState('Main');

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="chatpage-container">
      {/* Sidebar */}
      <div className="sidebar">
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
                  <p>{index + 1} Attempt</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs - Placed at the bottom */}
        <div className="tabs">
          <div className="button-wrapper">
            <button
              className={`tab-button-history ${currentTab === 'History' ? 'active' : ''}`}
              onClick={() => handleTabClick('History')}
            >
              <FontAwesomeIcon icon={faHistory} /> History
            </button>
            <button
              className={`tab-button-main ${currentTab === 'Main' ? 'active' : ''}`}
              onClick={() => handleTabClick('Main')}
            >
              <FontAwesomeIcon icon={faComment} /> Main
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="user-info">
          <button className="user-profile"></button>
        </div>
        <div className="attempt-icon">
          <img className="engle" src={engle} alt="engle" />
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
          <div className="history-page">
          </div>
        )}
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
        </div>
      </div>
    </div>
  );
}
