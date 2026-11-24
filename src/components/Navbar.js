import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);
const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login", { replace: true });
  } catch (error) {
    console.error("Logout error:", error);
    alert("Logout failed. Please try again.");
  }
};
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
  <li>
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  </li>
) : (
  <>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Signup</Link></li>
  </>
)}
      </ul>
    </nav>
  );
};

export default Navbar;
