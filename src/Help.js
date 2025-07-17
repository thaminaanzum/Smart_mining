import React from "react";
import { useNavigate } from "react-router-dom";
import './Help.css'; // Ensure this contains styling for scrollable content

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="diagnostics-container">
      <div className="navbar">
        <div className="navbar-title">Help</div>
      </div>

      <div className="diagnostics-content scrollable">
        <h2>📘 Operator Manual</h2>
        <p>
          Welcome to the Help section. This operator manual is designed to guide users through the effective and safe operation of this application. Please take a moment to carefully read through the following instructions. Ensure that all users are trained and familiar with system operations before use.
        </p>
        <p>
          Begin by logging in using your registered credentials. Upon successful authentication, you will be directed to the dashboard where all features such as Diagnostics, Emergency Support, and Settings are available. The left panel provides navigation access to all critical modules. Click on each tab to open respective functionalities.
        </p>
        <p>
          To run diagnostics, click the 'Diagnostics' section and follow on-screen instructions. You may initiate tests, view results, and export reports. For emergencies, use the red alert button at the top-right. It records audio for support personnel and logs critical information for follow-up.
        </p>
        <p>
          Always ensure your internet connection is stable before beginning a session. Avoid using browser back/refresh buttons while in a module. Use the in-app 'Back' or 'Home' buttons for safer navigation and to prevent data loss.
        </p>
        <p>
          If an unexpected error occurs, please document the issue and contact support using the 'Contact Us' link provided below. Include the error message, screenshot, and steps to reproduce the issue.
        </p>
        <p>
          This application is designed for use on modern browsers (Chrome, Edge, Firefox). It may not function properly on outdated browsers. Regular updates will be provided to improve features, so please check the official release notes periodically.
        </p>
        <p>
          Remember to log out after completing your session to protect your personal data. The system will automatically log out users after 30 minutes of inactivity.
        </p>
        <p>
          For further assistance, refer to video tutorials available in the 'Tutorials' tab or reach out to our support center.
        </p>

        <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>
      </div>
    </div>
  );
};

export default Help;
