import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // 👈 import the CSS here

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Machine Login</h2>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}

export default Login;