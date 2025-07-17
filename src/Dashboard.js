import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { FaTools, FaQuestionCircle, FaPhone, FaCog, FaExclamationTriangle } from 'react-icons/fa';

const tasks = [
  { name: "Digging at Site A", time: "30 min" },
  { name: "Load Debris", time: "45 min" },
  { name: "Move to Site B", time: "15 min" },
  { name: "Standby Mode", time: "10 min" },
];

function Dashboard() {
  const navigate = useNavigate();
  const [recording, setRecording] = useState(false);

  const handleEmergencyClick = () => {
    setRecording(true);
    setTimeout(() => setRecording(false), 3000); // simulate 3 seconds recording
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:22z267@psgtech.ac.in?subject=Support Request&body=Hi, I need help with...';
  };

  const [weather, setWeather] = useState(null);

  useEffect(() => {
  fetch('https://wttr.in/?format=j1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setWeather(data.current_condition[0]);
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
    });
}, []);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <div className="navbar">
        <h2 className="navbar-title">Smart Machinery Assistant</h2>
      </div>
      <div className="weather-box">
        {weather ? (
          <div>
            🌤️ <strong>{weather.name}</strong>: {weather.weather[0].description}, {weather.main.temp}°C
          </div>
        ) : (
          <div>Loading weather...</div>
        )}
      </div>


      <h1>Machine Task Dashboard</h1>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Predicted Time</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i}>
              <td>{task.name}</td>
              <td>{task.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons Grid */}
      <div className="button-grid">
        <div
          className="btn diagnostics"
          title="Check current machine performance and component health"
          onClick={() => navigate('/diagnostics')}
        >
          <FaTools size={30} />
          <span>Diagnostics</span>
        </div>

        <div
          className="btn help"
          title="Access user manuals, tutorials, and common FAQs"
          onClick={() => navigate('/help')}
        >
          <FaQuestionCircle size={30} />
          <span>Help</span>
        </div>

        <div
          className="btn contact"
          title="Contact technical support at 22z267@psgtech.ac.in"
          onClick={handleContactClick}
        >
          <FaPhone size={30} />
          <span>Contact Us</span>
        </div>

        
      </div>

      {/* Emergency Button */}
      <button className="emergency-button" onClick={handleEmergencyClick} title="Trigger emergency alert and recording">
        <FaExclamationTriangle size={24} />
        {recording && <div className="recording-indicator">Recording...</div>}
      </button>
    </div>
  );
}

export default Dashboard;