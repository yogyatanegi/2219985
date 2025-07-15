"use client";
import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Content */}
        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Shorten URLs <span className="highlight">instantly</span><br />
            with our AI-powered tool.
          </h1>
          <p>
            Transform long, messy links into clean, branded short URLs in one click. Fast, reliable, and 100% free.
          </p>
          <motion.button
            className="get-started-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="https://cdn.dribbble.com/users/42048/screenshots/8350927/robotintro_dribble.gif"
            alt="Robot"
          />
        </motion.div>
      </div>

      
    </section>
  );
};

export default HeroSection;
