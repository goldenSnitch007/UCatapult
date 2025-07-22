import React from 'react';
import { Link } from 'react-router-dom';
import './OurCoreValuesPage.css';

const coreValues = [
  {
    icon: '🌸',
    title: 'Opportunity to Bloom',
    description: 'Every human being deserves the chance to reach their full potential. We provide a loving and caring environment where both learners and teachers can flourish.',
  },
  {
    icon: '❤️',
    title: 'Designed for Growth',
    description: 'Our classes are designed with intention. We give our learners and teachers the time and space to create responses that lead to effective, live learning experiences.',
  },
  {
    icon: '🤝',
    title: 'Rooted in Respect',
    description: 'A profound sense of respect and faith exists among our team members and for the students who join us. This is the foundation of our community.',
  },
  {
    icon: '🌱',
    title: 'Continuous Evolution',
    description: 'We are on a constant journey of learning and evolving. Our mission to reach and support every rural learner drives us to continually improve and innovate.',
  },
];

const OurCoreValuesPage = () => {
  return (
    <div className="our-core-values-page">
      {/* Hero Section */}
      <section className="values-hero-section">
        <div className="values-hero-content">
          <h1>Our Commitment: Every Mind, Every Chance</h1>
          <p>We believe in the boundless potential of every individual. Our core values are the promises we make to our students, our team, and our communities.</p>
        </div>
      </section>

      {/* Main Values Section */}
      <section className="values-main-section">
        <div className="container">
          <div className="values-intro-text">
            <h2>The Heart of Our Mission</h2>
            <p>The organization finds that every human being should get an opportunity to bloom completely. All they require, a loving and caring environment to grow to their full potential. With this commitment, our learners as well as teachers get time and space to design their classes, responses for effective live learning to happen. There is an utmost sense of respect, faith among the team members as well as for the students who join us. We are continuously learning and evolving in our mission to reach and support every rural learner.</p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="values-cta-section">
        <div className="container">
          <h2>Join Us in Our Mission</h2>
          <p>Your support can help us reach more students and create a lasting impact. Let's build a brighter future together.</p>
          <div className="cta-buttons">
            <Link to="/work-with-us/join-our-team" className="button button-primary">Join Our Team</Link>
            <Link to="/work-with-us/contact-us#partner" className="button button-secondary">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreValuesPage;