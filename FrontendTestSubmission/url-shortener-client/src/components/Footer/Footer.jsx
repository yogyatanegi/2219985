import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Row */}
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            <span className="brand-logo">🔗</span> Shortly<span className="ai">.</span>
          </h2>
        </div>
        <p className="footer-tagline">
          Shorten. Track. Share. One platform to manage all your URLs efficiently and securely.
        </p>
        <div className="footer-socials">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Divider Line */}
      <hr className="footer-divider" />

      {/* Columns */}
      <div className="footer-columns">
        {/* Newsletter */}
        <div className="footer-col">
          <h4> Stay in the Loop</h4>
          <p>Get URL optimization tips and updates right in your inbox.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Features */}
        <div className="footer-col">
          <h4> Features</h4>
          <ul>
            <li>Smart Link Shortening</li>
            <li>Custom Alias Support</li>
            <li>Click Analytics</li>
            <li>Link Expiration</li>
            <li>QR Code Generator</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4> Resources</h4>
          <ul>
            <li>Documentation</li>
            <li>API Access</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4> Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Shortly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
