# ANIOR - Premium Streetwear & Sneaker E-Commerce Platform

ANIOR is a modern, high-performance, video-driven e-commerce storefront inspired by premium, minimalist aesthetic design frameworks. Built with React and optimized for smooth user interactions, it features immersive media elements, structured product routing, and a dynamic user interface.

Live Demo: [https://anior-sneakers.vercel.app](https://anior-sneakers.vercel.app)
GitHub Repository: [https://github.com/Aniket8191/anior-sneakers](https://github.com/Aniket8191/anior-sneakers)

---

## 🚀 Key Features

* **Apple-Style Highlight Slider:** A horizontal, swipeable product showcase utilizing a hover-to-play background video matrix.
* **Cinematic Hero Banner:** Full-bleed, automated video loop integrated directly into the landing interface for high-impact visual branding.
* **Optimized Media Pipeline:** High-definition video assets served directly through root static assets to prevent rendering pipeline delays and cross-origin header conflicts.
* **Protected App Routing:** Secured application states for sensitive routes (e.g., `/product`, `/cart`) preventing unauthenticated entry.
* **Global State Cart Management:** Centralized React state controller ensuring synchronized updates between individual listings and the checkout interface.

---

## 🛠️ Tech Stack & Framework Architecture

* **Frontend Library:** React (Functional Components, Hooks)
* **Routing Engine:** React Router DOM (Declarative Routing & Route Guards)
* **Styles & Layout:** CSS3 (Flexbox, CSS Grid, Custom Media Queries for responsive breakpoints)
* **Deployment & Hosting:** Vercel Global Edge Network

---

## 📦 Directory Optimization & Architecture

To achieve lightning-fast loading speeds on production environments, the heavy video infrastructure was decoupled from the standard JavaScript build package:

```text
public/
└── videos/
    ├── V1.mp4   # Full-bleed landing page cinematic loop
    ├── V2.mp4   # Card 1 interactive showcase
    ├── V3.mp4   # Card 6 interactive showcase
    ├── V5.mp4   # Card 3 interactive showcase
    ├── V6.mp4   # Card 2 interactive showcase
    ├── V8.mp4   # Card 4 interactive showcase
    └── V9.mp4   # Card 5 interactive showcase
