import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  const [error, setError] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const res = await login(loginEmail, loginPassword);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    if (signupPassword !== signupConfirm) {
      setError("Passwords do not match");
      return;
    }
    const res = await register(signupEmail, signupPassword, { role: "user" }); // Provide some default profile data
    if (res.success) {
      navigate("/");
    } else {
      setError(res.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0B0F19] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="auth-wrapper bg-white dark:bg-[#111827] dark:text-white">
        <div className="auth-title-text">
          <div className="auth-title login" style={{ marginLeft: isLogin ? "0%" : "-50%" }}>Login Form</div>
          <div className="auth-title signup">Signup Form</div>
        </div>
        
        <div className="auth-form-container">
          <div className="auth-slide-controls border-gray-200 dark:border-gray-700 border">
            <input 
              type="radio" 
              name="slide" 
              id="login" 
              checked={isLogin} 
              onChange={() => { setIsLogin(true); setError(""); }} 
            />
            <input 
              type="radio" 
              name="slide" 
              id="signup" 
              checked={!isLogin} 
              onChange={() => { setIsLogin(false); setError(""); }} 
            />
            <label htmlFor="login" className="auth-slide login text-[#10152E] dark:text-gray-200">Login</label>
            <label htmlFor="signup" className="auth-slide signup text-[#10152E] dark:text-gray-200">Signup</label>
            <div className="auth-slider-tab"></div>
          </div>
          
          {error && <div className="text-red-500 text-center text-sm mb-2">{error}</div>}

          <div className="auth-form-inner">
            <form onSubmit={handleLogin} className="login" style={{ marginLeft: isLogin ? "0%" : "-50%" }}>
              <div className="auth-field">
                <input 
                  type="text" 
                  placeholder="Email Address" 
                  required 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="text-[#10152E] dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="auth-field">
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="text-[#10152E] dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="auth-pass-link"><a href="#">Forgot password?</a></div>
              <div className="auth-field auth-btn">
                <div className="auth-btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="auth-signup-link text-[#10152E] dark:text-gray-300">
                Not a member? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); setError(""); }}>Signup now</a>
              </div>
            </form>
            
            <form onSubmit={handleSignup} className="signup">
              <div className="auth-field">
                <input 
                  type="text" 
                  placeholder="Email Address" 
                  required 
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="text-[#10152E] dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="auth-field">
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="text-[#10152E] dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="auth-field">
                <input 
                  type="password" 
                  placeholder="Confirm password" 
                  required 
                  value={signupConfirm}
                  onChange={(e) => setSignupConfirm(e.target.value)}
                  className="text-[#10152E] dark:text-white border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="auth-field auth-btn">
                <div className="auth-btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
