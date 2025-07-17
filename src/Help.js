import React from "react";
import { useNavigate } from "react-router-dom";
import './Help.css'; // import the CSS file

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="diagnostics-container">
      <div className="navbar">
        <div className="navbar-title">Help</div>
      </div>

      <div className="diagnostics-content">
        <h2>❓ Help Section</h2>
        <ul>
          <li><b>User Manual:</b> Step-by-step operation guide</li>
          <li><b>Video Tutorials:</b> Basic controls and maintenance tips</li>
          <li><b>FAQs:</b> Answers to common questions</li>
        </ul>
        <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>
      </div>
    </div>
  );
};

export default Help;