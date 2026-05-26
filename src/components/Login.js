import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./Login.css";


const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Live Firebase Sign-In Authentication
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("✅ Login Successful!");
      if (setIsAuthenticated) setIsAuthenticated(true);
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ " + err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>ANIOR</h2>
        <p className="subtitle">Welcome back. Enter your credentials to access your account.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com"
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••"
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="auth-switch-text" style={{ color: "#aaa", marginTop: "20px", fontSize: "0.9rem" }}>
  Don't have an account? <Link to="/signup" style={{ color: "#fff", fontWeight: "600", textDecoration: "none" }}>Sign Up</Link>
</p>
      </div>
    </div>
  );
};

export default Login;