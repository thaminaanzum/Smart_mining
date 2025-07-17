import React from "react";
import { useNavigate } from "react-router-dom";
import './Diagnostics.css';

const Diagnostics = () => {
  const navigate = useNavigate();

  return (
    <div className="diagnostics-container">
      <nav className="navbar">
        <div className="navbar-title">Smart Vehicle Dashboard</div>
      </nav>

      <div className="diagnostics-content">
        <h2>🔍 Diagnostics</h2>
        <ul>
          <li>Status: <b>All systems operational</b></li>
          <li>Recent Errors: <b>No critical errors</b></li>
          <li>Battery Level: <b>85%</b></li>
          <li>Fuel Level: <b>60 liters remaining</b></li>
        </ul>
        <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>
      </div>
    </div>
  );
};

export default Diagnostics;