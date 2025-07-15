import React, { useState } from "react";
import "./FAQSection.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is a URL shortener?",
    answer:
      "A URL shortener is a tool that converts a long web address into a compact, easy-to-share link.",
  },
  {
    question: "How does the short link work?",
    answer:
      "When clicked, the short link redirects users to the original long URL using smart routing.",
  },
  {
    question: "Can I track link clicks?",
    answer:
      "Yes! Our platform provides real-time analytics to monitor clicks, devices, locations, and more.",
  },
  {
    question: "Can I create custom aliases?",
    answer:
      "Absolutely. You can create branded and customized short links like mysite.xyz/sale.",
  },
  
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        {/* Left image */}
        <div className="faq-image">
          <img
            src="https://d2xgqyuql1olth.cloudfront.net/assets/Uploads/2023-12/AI-Artificial-Intelligence-Human-gif-web.gif"
            alt="Human and AI Collaboration"
          />
        </div>

        {/* Right FAQ accordion */}
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <div
                  className={`faq-question ${openIndex === i ? "active" : ""}`}
                  onClick={() => toggleFAQ(i)}
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`faq-icon ${openIndex === i ? "rotate" : ""}`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
