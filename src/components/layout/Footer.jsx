// src/components/layout/Footer.jsx
/*
  This is our site's Footer component. It contains essential links, contact information,
  social media icons, and copyright details.
  I've used a grid layout for responsiveness and placeholders for social media icons.
  FUTURE PLAN:
  - Replace text placeholders (F, T, L, I) for social media icons with actual icons
    from a library like react-icons (e.g., <FaFacebookF />).
  - Ensure all hrefs for quick links and policy links point to correct sections/pages
    once those are built out or routing is in place.
  - The "Donate Now" button is commented out but can be easily re-enabled.
  - The phone number is also commented out; we can add it if needed.
*/
import React from 'react';
import './Footer.css';
// FUTURE: Import actual icons from a library like react-icons
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically gets the current year

  return (
    // Added id="contact-us-section" to allow header link to scroll here
    <footer className="site-footer-main" id="contact-us-section">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About/Logo */}
          <div className="footer-column footer-about">
            {/* Using text for logo, can be replaced with an <img> tag if we have a footer-specific logo image */}
            <h4 className="footer-logo-text">UCatapult Foundation</h4>
            <p>
              Dedicated to nurturing the potential of rural learners and bridging
              the digital divide through transformative education and technology.
            </p>
            {/* FUTURE: Optional Donate Button - uncomment and style if needed */}
            {/*
            <a href="#donate-section" className="button button-primary footer-donate-btn">
              Support Our Mission
            </a>
            */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#who-we-are">About Us</a></li> {/* Placeholder, ensure section or page exists */}
              <li><a href="#what-we-do">Our Work</a></li> {/* Placeholder */}
              <li><a href="#our-journey">Our Journey</a></li> {/* Links to HomePage section */}
              <li><a href="#get-involved">Get Involved</a></li> {/* Placeholder */}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="footer-column footer-contact">
            <h4>Contact Us</h4>
            <address>
              UCatapult Foundation<br />
              Mumbai, India<br />
              {/* Optional: Street Address if needed */}
            </address>
            <p className="contact-info">
              <span className="contact-label">Email:</span> <a href="mailto:info@ucatapult.org">info@ucatapult.org</a><br />
              {/* FUTURE: Optional Phone Number - uncomment if needed */}
              {/* <span className="contact-label">Phone:</span> <a href="tel:+911234567890">+91 123 456 7890</a> */}
            </p>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="footer-column footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              {/* FUTURE: Replace text F, T, L, I with actual icon components */}
              <a href="#" aria-label="Facebook" title="Facebook">F</a> {/* Replace F with <FaFacebookF /> */}
              <a href="#" aria-label="Twitter" title="Twitter">T</a> {/* Replace T with <FaTwitter /> */}
              <a href="#" aria-label="LinkedIn" title="LinkedIn">L</a> {/* Replace L with <FaLinkedinIn /> */}
              <a href="#" aria-label="Instagram" title="Instagram">I</a> {/* Replace I with <FaInstagram /> */}
              {/* Example for YouTube: <a href="#" aria-label="YouTube" title="YouTube"><FaYoutube /></a> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright and legal links */}
        <div className="footer-bottom">
          <p>© {currentYear} UCatapult Foundation. All Rights Reserved.</p>
          <p>
            {/* FUTURE: Ensure these links point to actual policy pages */}
            <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-use">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;