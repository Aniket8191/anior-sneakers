import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A4 from "../assets/A4.jpg";
import A5 from "../assets/A5.jpg";
import A6 from "../assets/A6.jpg";
import A7 from "../assets/A7.jpg";
import A8 from "../assets/A8.jpg";
import A9 from "../assets/A9.jpg";
import "./Product.css";// Reusing the product grid styles for now

const imageMap = {
  "A1.jpg": A1,
  "A2.jpg": A2,
  "A3.jpg": A3,
  "A4.jpg": A4,
  "A5.jpg": A5,
  "A6.jpg": A6,
  "A7.jpg": A7,
  "A8.jpg": A8,
  "A9.jpg": A9,
};

const Product = ({ setCart }) => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data) => {
      const formattedProducts = data.map((product) => ({
        ...product,
        price: Number(product.price),
        img: imageMap[product.img],
      }));

      setProducts(formattedProducts);
    })
    .catch((error) => console.error(error));
}, []);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const quantity = selectedQuantities[product.id] || 1;
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    setMessage(`${product.name} (x${quantity}) added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  return (
    <div className="home-container" style={{ paddingTop: "100px" }}>
      <h1 className="title" style={{ fontSize: "2.5rem" }}>The Collection</h1>
      <p className="subtitle">Premium quality built for everyday performance.</p>

      {message && <p className="cart-message">{message}</p>}

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <select
              className="quantity-selector"
              onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <div className="button-container">
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button className="go-to-cart" onClick={() => navigate("/cart")}>
                Go to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;