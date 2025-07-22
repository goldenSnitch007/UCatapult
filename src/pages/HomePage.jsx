import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Can we all take a pledge to reach those who want to study from the remote section and provide support?</h1>
          <Link to="/work-with-us/join-our-team" className="cta-button">Join Our Mission</Link>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="founders-message-section">
        <div className="container">
          <h2>Message from the Founder</h2>
          <div className="founder-content">
            <div className="founder-image">
              {/* Placeholder for founder's image */}
            </div>
            <div className="founder-text">
              <p>“I am a mother, wife, and above all, a learner, who is inspired to empower rural students through digital education. I am on a mission to connect passionate students with committed teachers in our country. Over the past six years, despite numerous ups and downs, we have successfully supported many rural learners in our country. If you also believe in the power of digital education and community-driven support, join our team! It could help you and us to expand this impactful initiative and create a brighter future for many more students of our country.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>35000+</h3>
              <p>Total number of learners who are preparing for higher exams with us</p>
            </div>
            <div className="stat">
              <h3>45</h3>
              <p>Total number of learners who are attending virtual class every week with us</p>
            </div>
            <div className="stat">
              <h3>125</h3>
              <p>Total number of students who joined reputed schools after 10 with us</p>
            </div>
            <div className="stat">
              <h3>125+</h3>
              <p>Total number of teachers joined to support our learners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
