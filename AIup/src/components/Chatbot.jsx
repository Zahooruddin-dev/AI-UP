// src/components/Chatbot.jsx
// Placeholder for the main chatbot interface.
import React from 'react';
import { Link } from 'react-router-dom';

function Chatbot() {
  return (
    <div className="chatbot-main-container">
      <div className="chatbot-header">
        <h1 className="chatbot-title">AI Chat Agent</h1>
        <Link to="/" className="button button-secondary button-small">
          Go Home
        </Link>
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