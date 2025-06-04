import React, { useState } from "react";

const ADMIN_PASSWORD = "Admin@1234";

function AdminPanel() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [prediction, setPrediction] = useState(localStorage.getItem("prediction") || "");
  const [newPrediction, setNewPrediction] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) setLoggedIn(true);
    else alert("Incorrect password");
  };

  const updatePrediction = () => {
    localStorage.setItem("prediction", newPrediction);
    setPrediction(newPrediction);
    alert("Prediction updated");
    setNewPrediction("");
  };

  if (!loggedIn) {
    return (
      <div style={{ maxWidth: 400, margin: "auto", padding: 20, textAlign: "center" }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <button onClick={handleLogin} style={{ padding: "8px 16px" }}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Update Prediction</h2>
      <p>Current Prediction: <b>{prediction || "None"}</b></p>
      <input
        type="text"
        placeholder="Enter new prediction"
        value={newPrediction}
        onChange={(e) => setNewPrediction(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button onClick={updatePrediction} style={{ padding: "8px 16px" }}>
        Update
      </button>
    </div>
  );
}

export default AdminPanel;
