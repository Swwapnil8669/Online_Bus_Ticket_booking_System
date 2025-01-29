import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* GoBus Info */}
        <div>
          <h2 className="footer-title">GoBus</h2>
          <p className="footer-text">
            GoBus is the world’s largest online bus ticket booking service
            trusted by over 25 million happy customers globally. GoBus offers
            bus ticket booking through its website, iOS, and Android mobile apps
            for all major routes.
          </p>
        </div>

        {/* About GoBus */}
        <div>
          <h3 className="footer-title">About GoBus</h3>
          <ul className="footer-list">
            <li>About us</li>
            <li>Investor Relations</li>
            <li>Contact us</li>
            <li>Mobile version</li>
            <li>GoBus on mobile</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="footer-title">Info</h3>
          <ul className="footer-list">
            <li>T&C</li>
            <li>Privacy policy</li>
            <li>FAQ</li>
            <li>Blog</li>
            
          </ul>
        </div>

        {/* Global Sites */}
        <div>
          <h3 className="footer-title">Global Sites</h3>
          <ul className="footer-list">
            <li>India</li>
            <li>Singapore</li>
            <li>Malaysia</li>
            <li>Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 GoBus India Pvt Ltd. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
