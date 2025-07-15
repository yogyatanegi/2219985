"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Link,
  Settings,
  Rocket,
  Globe,
} from "lucide-react"; // or any icon lib
import "./UrlShortenerFeatures.css";

const features = [
  {
    icon: <Link size={28} />,
    title: "Create Short Links",
    description:
      "Generate branded, compact URLs that are easy to share and remember. Clean and fast link transformation.",
  },
  {
    icon: <Settings size={28} />,
    title: "Custom Alias Support",
    description:
      "Customize your short links with meaningful aliases for branding, tracking, or internal reference.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Analytics & Insights",
    description:
      "Track link clicks, devices, locations, and user behavior in real-time with visual insights.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Redirection",
    description:
      "Intelligent redirection with language and geo-targeting. Optimize experiences for users worldwide.",
  },
];

const UrlShortenerFeatures = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Making Short Links Has Never Been Easier.</h2>
        <p>
          Our AI-powered URL shortener is simple, powerful, and built for speed, branding, and analytics.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feat, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="feature-icon">{feat.icon}</div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UrlShortenerFeatures;
