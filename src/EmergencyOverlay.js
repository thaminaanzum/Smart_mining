import React, { useEffect } from "react";

const EmergencyOverlay = () => {
  useEffect(() => {
    alert("📹 Emergency recording started.");
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)", color: "red",
      display: "flex", justifyContent: "center", alignItems: "center", fontSize: "32px", fontWeight: "bold"
    }}>
      🚨 Recording...
    </div>
  );
};

export default EmergencyOverlay;
