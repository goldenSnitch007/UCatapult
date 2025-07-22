import React from 'react';
import './WhatWeDoPage.css';

const WhatWeDoPage = () => {
  return (
    <div className="what-we-do-page">
      <div className="container">
        <div className="page-header">
          <h1>What We Do</h1>
        </div>
        <div className="page-content">
          <p className="mission-statement">
            UCatapult Foundation is on a mission to become the first ed-tech learning platform for the Indian secondary and senior secondary rural student community.
          </p>
          <p>
            At present, under our banner, Digital Machaan, in collaboration with the government and other stakeholders, we are providing hand-holding to rural tribal secondary and senior secondary learners by providing live subject sessions in their regional languages, laptops, and various mentorship sessions around career counselling, scholarship. Hence, supporting passionate students to achieve and build a bright future for themselves, their families, and their communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
