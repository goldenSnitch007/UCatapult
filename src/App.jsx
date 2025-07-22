// src/App.jsx
/**
 * @file App.jsx
 * @description The root component of the application. It sets up the main layout
 * and handles the routing for all pages using React Router.
 * @author Gemini
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import OurApproachPage from './pages/info/OurApproachPage';
import OurJourneyPage from './pages/info/OurJourneyPage';
import PeopleAndPartnersPage from './pages/info/PeopleAndPartnersPage';
import AnnualReportsPage from './pages/info/AnnualReportsPage';
import DigitalMachaanPage from './pages/info/DigitalMachaanPage';
import BuddyProgramPage from './pages/info/BuddyProgramPage';
import ProjectCheshtaPage from './pages/info/ProjectCheshtaPage';
import JoinOurTeamPage from './pages/info/JoinOurTeamPage';
import ContactUsPage from './pages/info/ContactUsPage';
import WhatWeDoPage from './pages/info/WhatWeDoPage';
import OurCoreValuesPage from './pages/info/OurCoreValuesPage';

import './index.css'; // Global styles

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Informational Pages from Header */}
          <Route path="/who-we-are/our-approach" element={<OurApproachPage />} />
          <Route path="/who-we-are/our-journey" element={<OurJourneyPage />} />
          <Route path="/who-we-are/people-and-partners" element={<PeopleAndPartnersPage />} />
          <Route path="/who-we-are/annual-reports" element={<AnnualReportsPage />} />
          <Route path="/who-we-are/our-core-values" element={<OurCoreValuesPage />} />

          <Route path="/what-we-do/digital-machaan" element={<DigitalMachaanPage />} />
          <Route path="/what-we-do/buddy-program" element={<BuddyProgramPage />} />
          <Route path="/what-we-do/project-cheshta" element={<ProjectCheshtaPage />} />

          <Route path="/work-with-us/join-our-team" element={<JoinOurTeamPage />} />
          <Route path="/work-with-us/contact-us" element={<ContactUsPage />} />

          <Route path="/about/what-we-do" element={<WhatWeDoPage />} />

          <Route path="/about/our-journey" element={<OurJourneyPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;