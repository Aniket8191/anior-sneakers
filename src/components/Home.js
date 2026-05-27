import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import B7 from "../assets/B7.jpg";  
import B1 from "../assets/B1.jpg";  

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  
  const videoRefs = useRef([]);
  const sliderRef = useRef(null);
  
  // State to keep track of which dot is active manually
  const [activeDot, setActiveDot] = useState(0);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((err) => console.log("Video play interrupted:", err));
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  // Tracks scroll layout position accurately and handles right-edge tracking
  const handleSliderScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      
      // Check if the user has scrolled all the way to the right end edge
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        setActiveDot(5); // Force the 6th dot to light up at the end
        return;
      }

      const index = Math.round(scrollLeft / 420); // 400px card width + 20px gap
      if (index >= 0 && index < 6) {
        setActiveDot(index);
      }
    }
  };

  // Allows clicking a dot to scroll directly to that video card
  const scrollToCard = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * 420,
        behavior: "smooth"
      });
      setActiveDot(index);
    }
  };

  return (
    <div className="home-container">
      
      {/* SECTION 1: THE VIDEO HERO BANNER */}
      <section className="hero-video-section">
        {/* Pointing directly to the public/videos folder path */}
        <video 
          className="hero-bg-video" 
          src="/videos/V1.mp4"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
        />
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

      {/* SECTION 3: NEW APPLE-STYLE HORIZONTAL SLIDER */}
      <section className="slider-container-section">
        <div className="slider-header">
          <h2 className="slider-title">Get the highlights.</h2>
        </div>

        {/* The row that scrolls horizontally */}
        <div 
          className="horizontal-slider"
          ref={sliderRef}
          onScroll={handleSliderScroll}
        >
          
          {/* Card 1 */}
          <div 
            className="slider-card"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <div className="slider-card-text">
              <p>Nitrogen-infused foam midsole for maximum energy return.</p>
            </div>
            <video 
              ref={(el) => (videoRefs.current[0] = el)}
              className="slider-video" 
              src="/videos/V2.mp4"
              loop muted playsInline preload="auto"
            />
          </div>

          {/* Card 2 */}
          <div 
            className="slider-card"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div className="slider-card-text">
              <p>Dynamic ankle collar anchoring engineered for lateral stability.</p>
            </div>
            <video 
              ref={(el) => (videoRefs.current[1] = el)}
              className="slider-video" 
              src="/videos/V6.mp4"
              loop muted playsInline preload="auto"
            />
          </div>

          {/* Card 3 */}
          <div 
            className="slider-card"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div className="slider-card-text">
              <p>Recycled matrix mesh weave provides structural breathability.</p>
            </div>
            <video 
              ref={(el) => (videoRefs.current[2] = el)}
              className="slider-video" 
              src="/videos/V5.mp4"
              loop muted playsInline preload="auto"
            />
          </div>

          {/* Card 4 */}
          <div 
            className="slider-card"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <div className="slider-card-text">
              <p>Hyper-grip rubber traction map designed for high-speed cuts.</p>
            </div>
            <video 
              ref={(el) => (videoRefs.current[3] = el)}
              className="slider-video" 
              src="/videos/V8.mp4"
              loop muted playsInline preload="auto"
            />
          </div>

          {/* Card 5 */}
          <div 
            className="slider-card"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <div className="slider-card-text">
              <p>Hyper-grip collection and traction map designed for high-speed cuts.</p>
            </div>
            <video 
              ref={(el) => (videoRefs.current[4] = el)}
              className="slider-video" 
              src="/videos/V9.mp4"
              loop muted playsInline preload="auto"
            />
          </div>

          {/* Card 6 */}
          <div 
            className="slider-card"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
          >
            <div className="slider-card-text">
              <p>Great mixture of collection from trusted brands.</p>
            </div>
            <video 
              ref={(el) => (videoRefs.current[5] = el)}
              className="slider-video" 
              src="/videos/V3.mp4"
              loop muted playsInline preload="auto"
            />
          </div>
        </div>

        {/* Apple Style Control Track Indicator with clickable span dots */}
        <div className="slider-controls">
          <div className="apple-pill-indicator">
            <span className={`pill-dot ${activeDot === 0 ? "active" : ""}`} onClick={() => scrollToCard(0)}></span>
            <span className={`pill-dot ${activeDot === 1 ? "active" : ""}`} onClick={() => scrollToCard(1)}></span>
            <span className={`pill-dot ${activeDot === 2 ? "active" : ""}`} onClick={() => scrollToCard(2)}></span>
            <span className={`pill-dot ${activeDot === 3 ? "active" : ""}`} onClick={() => scrollToCard(3)}></span>
            <span className={`pill-dot ${activeDot === 4 ? "active" : ""}`} onClick={() => scrollToCard(4)}></span>
            <span className={`pill-dot ${activeDot === 5 ? "active" : ""}`} onClick={() => scrollToCard(5)}></span>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE CALL TO ACTION PANEL */}
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