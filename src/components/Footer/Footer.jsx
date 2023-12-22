import React from "react";
import "./Footer.css";

const Footer = () => {
  return (

    // footer container
    <div className="footer-container">
      <footer className="footer">
        <div className="container">
          <div className="left-column">
          <div className="help-section">
            <h4 className="help">Help</h4>
            <a href="#" className="help-link"><p>Search</p></a>
            <a href="#" className="help-link"><p>Store Policies</p></a>
            <a href="#" className="help-link"><p>General Information</p></a>
          </div>
          </div>

            {/* middle column */}
            <div className="middle-column">
              <h4 className="newsletter">KEEP IN THE LOOP</h4>
              <p className="newsletter-text">SUBSCRIBE AND BE NOTIFIED WHEN SOMETHING HAPPENS!</p>
            <div className="subscribe-area">
              <input className="subscribe-bar" placeholder="Email address"></input>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>

            {/* social media section */}
            <ul className="social-media">
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-pinterest"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                <li><i className="fa-brands fa-tiktok"></i></li>
            </ul>
            </div>

            {/* empty right column */}
          <div className="right-column"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
