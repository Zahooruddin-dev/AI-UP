// src/components/Login.jsx
// Placeholder for the user login form.
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login to Chat</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="user@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="password123"
            required
          />
        </div>
        <button type="submit" className="button button-primary button-full-width">
          Login
        </button>
        <p className="login-signup-link">
          Don't have an account?{' '}
          <Link to="/" className="text-link">
            Go Home
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;