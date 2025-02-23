import React from "react";
import "../components/LoginForm.css";
import logoNSS from "../assets/1.png";
import logoCharusat from "../assets/5.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-section">
        <img src={logoNSS} alt="NSS Logo" className="nss-logo" />
      </div>
    <div className="login-card">
      <img src={logoCharusat} alt="Charusat Logo" className="charusat-logo" />
      <form className="form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <br/>
        <a href="#" className="forgot-password">Forgot your password?</a>
        <br/>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
