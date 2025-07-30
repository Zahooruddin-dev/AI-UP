// src/components/Chatbot.jsx
// Main chatbot interface, now integrated with AuthContext for user info and logout.
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for logout redirect
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

function Chatbot() {
  const { currentUser, logout } = useAuth(); // Get current user and logout function
  const navigate = useNavigate(); // Get navigate function

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="chatbot-main-container">
      <div className="chatbot-header">
        <h1 className="chatbot-title">AI Chat Agent</h1>
        {/* Display user's name if logged in */}
        {currentUser && <span className="user-display">Logged in as: {currentUser.name || currentUser.email}</span>}
        <button onClick={handleLogout} className="button button-secondary button-small">
          Logout
        </button>
      </div>
      <div className="chatbot-messages-display">
        <p className="chatbot-placeholder-message">
          This is where the chat messages will appear!
        </p>
        <p className="chatbot-placeholder-message">
          We'll build the chat logic and UI in the next steps.
        </p>
      </div>
      <div className="chatbot-input-area">
        <input
          type="text"
          placeholder="Type your message..."
          className="chatbot-input"
          disabled
        />
        <button className="button button-primary" disabled>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;