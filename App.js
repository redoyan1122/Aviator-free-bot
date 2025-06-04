import React, { useState, useEffect } from "react";

function UserPanel() {
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    const savedPrediction = localStorage.getItem("prediction") || "No prediction yet";
    setPrediction(savedPrediction);
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, textAlign: "center" }}>
      <h2>Avatar Predictor</h2>
      <p style={{ fontSize: 24, fontWeight: "bold" }}>{prediction}</p>
    </div>
  );
}

export default UserPanel;
