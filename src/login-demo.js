import React, { useState } from "react";
import { useNavigate,Route,Routes } from "react-router-dom";
import './login.css';

// Login Page Component
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async() => {
    const response = await fetch("https://login-backend-piwu.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (data.success) {
        // setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/home"; // Navigate to Home Page
        }, 2000);
      } else {
        // setMessage("Invalid credentials. Try again.");
        window.alert('Invalid Credentials - Tryagain.');
      }
  };

  return (
    <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  </div>
  );
};

// Home Page Component
const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold">Welcome to the application</h1>
    </div>
  );
};

// App Component with Routing
const App1 = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
};

export default App1;
