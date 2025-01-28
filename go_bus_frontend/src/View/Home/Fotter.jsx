import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* redBus Info */}
        <div>
          <h2 className="footer-title">redBus</h2>
          <p className="footer-text">
            redBus is the world’s largest online bus ticket booking service
            trusted by over 25 million happy customers globally. redBus offers
            bus ticket booking through its website, iOS, and Android mobile apps
            for all major routes.
          </p>
        </div>

        {/* About redBus */}
        <div>
          <h3 className="footer-title">About redBus</h3>
          <ul className="footer-list">
            <li>About us</li>
            <li>Investor Relations</li>
            <li>Contact us</li>
            <li>Mobile version</li>
            <li>redBus on mobile</li>
            <li>Sitemap</li>
            <li>Offers</li>
            <li>Careers</li>
            <li>Values</li>
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
            <li>Bus operator registration</li>
            <li>Agent registration</li>
            <li>Insurance partner</li>
            <li>User agreement</li>
            <li>Primo Bus</li>
            <li>Bus Timetable</li>
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
            <li>Peru</li>
            <li>Colombia</li>
            <li>Cambodia</li>
            <li>Vietnam</li>
          </ul>
          <h3 className="footer-title">Our Partners</h3>
          <ul className="footer-list">
            <li>Goibibo Bus</li>
            <li>Goibibo Hotels</li>
            <li>Makemytrip Hotels</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Redbus India Pvt Ltd. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
