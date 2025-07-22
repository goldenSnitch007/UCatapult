import React from 'react';
import { Link } from 'react-router-dom';
import './OurJourneyPage.css';

const journeyData = [
  {
    year: '2020',
    title: 'A Question Sparks a Movement',
    description: 'The journey kicked off with a question during the COVID pandemic, when many migrant workers from urban areas returned to their villages due to job losses, economic uncertainty, and the closure of industries and businesses in cities, highlighting the vulnerabilities and disparities in India\'s urban-rural divide. The founder began to understand the possibilities of using technology to create a comprehensive digital platform for rural students that can significantly reduce migration driven by educational disparities.',
  },
  {
    year: '2020-2021',
    title: 'From Teachers to Students: Finding Our Focus',
    description: 'Initially launched the 1st learning course on 26 March 2020, focusing on teachers, but later transitioned to students, supported by local teachers in Bihar. The first virtual class as an alternative school was conducted on 2 October 2020, involving approximately 65 students from classes 6 and 8, and centered around English reading stories, marking a significant milestone in this initiative. Soon, we launched scholarship and Navodaya virtual classes for class 5th & 8th standard students in Bihar.',
  },
  {
    year: '2022-2025',
    title: 'Expanding Our Reach: The Maharashtra Chapter',
    description: 'In September 2022, we initiated the Maharashtra chapter. We provided digital literacy sessions to teachers. We onboarded 5 Zilla Parishad Schools in collaboration with the local NGO in Beed district in Maharashtra. Additionally, Class 10 students from Ashramshala schools in Kaudgaon and Mandekhel have joined our live classes. We completed their syllabus, helping them excel in their board exams. We have onboarded 5 more Zilla Parishad Schools in Chalisgaon, Jalgaon District in Maharashtra.',
  },
];

const OurJourneyPage = () => {
  return (
    <div className="our-journey-page">
      <section className="journey-hero">
        <div className="container">
          <h1>From a single question to a nationwide movement.</h1>
          <p className="hero-subtitle">Our journey is one of passion, perseverance, and the unwavering belief that every student deserves the chance to shine.</p>
        </div>
      </section>

      <section className="journey-timeline-section">
        <div className="container">
          {journeyData.map((item, index) => (
            <div key={index} className="journey-chapter">
              <div className="chapter-content">
                <h2 className="chapter-year">{item.year}</h2>
                <h3 className="chapter-title">{item.title}</h3>
                <p className="chapter-description">{item.description}</p>
              </div>
              <div className="chapter-image-placeholder">
                <span>Image for {item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="journey-conclusion">
        <div className="container">
          <h2>Our journey continues, and the path ahead is lit by the potential of every student we support.</h2>
          <Link to="/team-partners/partners" className="button button-primary">Partner With Us</Link>
        </div>
      </section>
    </div>
  );
};

export default OurJourneyPage;
