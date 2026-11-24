
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/signup";
import Product from "./components/Product";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart cart={cart} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product setCart={setCart} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
