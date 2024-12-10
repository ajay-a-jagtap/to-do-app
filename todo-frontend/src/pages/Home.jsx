import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  
    const handleContinue = () => {
      navigate("/tasks"); // Navigate to the tasks page
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to the Task Manager</h1>
        <p>Organize your tasks efficiently.</p>
        <button
          onClick={handleContinue}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    );
  };

  export default Home;