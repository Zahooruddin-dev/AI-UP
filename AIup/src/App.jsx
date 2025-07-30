// src/App.jsx
// This is the main application component.
// For now, it just displays a simple welcome message.
import React from 'react';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to AI Chat Agent</h1>
      <p className="app-subtitle">
        This is the very first step of your project!
      </p>
      <p className="app-instructions">
        Open your browser and navigate to the address shown in your terminal (usually http://localhost:5173).
      </p>
    </div>
  );
}

export default App;