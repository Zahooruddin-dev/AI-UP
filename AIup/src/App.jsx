// src/App.jsx
// This is the main application component, now handling routing.
import React from 'react';
// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import our new page components
import Home from './components/Home';
import Login from './components/Login';
import Chatbot from './components/Chatbot';

// For now, we'll keep the AuthProvider and PrivateRoute commented out.
// These will be introduced in Step 3 when we implement authentication.
// import { AuthProvider, useAuth } from './context/AuthContext';

/*
// Placeholder for PrivateRoute component (will be used in Step 3)
const PrivateRoute = ({ children }) => {
  // const { currentUser, loading } = useAuth();
  // For now, always allow access to chat for demonstration
  const isAuthenticated = true; // Simulate logged in for now
  const loading = false; // Simulate not loading for now

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading user session...</p>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
*/

function App() {
  return (
    // Router wraps the entire application to enable routing
    <Router>
      {/* AuthProvider will go here in Step 3 */}
      {/* <AuthProvider> */}
        <Routes>
          {/* Define public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Define a route for the chatbot.
              It will be protected by PrivateRoute in Step 3. */}
          <Route path="/chat" element={<Chatbot />} />
          {/* <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chatbot />
              </PrivateRoute>
            }
          /> */}

          {/* Catch-all route for unmatched paths, redirects to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;