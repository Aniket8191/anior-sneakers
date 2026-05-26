import React from "react";
import { useNavigate } from "react-router-dom";
import V1 from "../assets/V2.mp4"; // Your main looping background video
import B7 from "../assets/B7.jpg";  // The streetwear portrait image
import B1 from "../assets/B5.jpg";  // Second lifestyle image for performance card

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* SECTION 1: THE VIDEO HERO BANNER */}
      <section className="hero-video-section">
        {/* Background Video looping seamlessly */}
        <video className="hero-bg-video" autoPlay loop muted playsInline>
          <source src={V1} type="video/mp4" />
        </video>
        
        {/* Text Overlaying the Video */}
        <div className="hero-video-overlay">
          <h1 className="hero-brand-name">ANIOR</h1>
          <p className="hero-subtitle">Step into tomorrow.</p>
          <button className="apple-btn" onClick={() => navigate("/product")}>
            Explore Collection
          </button>
        </div>
      </section>

      {/* SECTION 2: THE LIFESTYLE VS PERFORMANCE SPLIT */}
      <section className="split-showcase-section">
        
        {/* Left Card: Streetwear / Lifestyle */}
        <div className="showcase-card">
          <div className="card-overlay">
            <h2>Built for the concrete.</h2>
            <p>Streetwear meets unparalleled comfort.</p>
            <button className="apple-link-btn" onClick={() => navigate("/product")}>
              Explore Lifestyle &rarr;
            </button>
          </div>
          <div className="card-media-wrapper">
            <img src={B7} alt="Streetwear Lifestyle" className="card-image-asset" />
          </div>
        </div>

        {/* Right Card: Athletic / Performance */}
        <div className="showcase-card">
          <div className="card-overlay">
            <h2>Engineered for speed.</h2>
            <p>Push boundaries with responsive technology.</p>
            <button className="apple-link-btn" onClick={() => navigate("/product")}>
              Explore Performance &rarr;
            </button>
          </div>
          <div className="card-media-wrapper">
            <img src={B1} alt="Performance Sneaker" className="card-image-asset" />
          </div>
        </div>

      </section>

      {/* SECTION 3: THE CALL TO ACTION PANEL */}
      <section className="cta-closing-section">
        <div className="cta-content">
          <h2>Upgrade your rotation.</h2>
          <p>Experience premium design engineered for everyday life.</p>
          <button className="apple-btn-dark" onClick={() => navigate("/product")}>
            Shop All Shoes
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;