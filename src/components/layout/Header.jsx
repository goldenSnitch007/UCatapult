import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import UcatapultLogo from '../../assets/images/ucatapult logo.png';

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navPanelRef = useRef(null);
  const headerRef = useRef(null);
  const navToggleRef = useRef(null);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (isNavMenuOpen &&
          navPanelRef.current && !navPanelRef.current.contains(event.target) &&
          navToggleRef.current && !navToggleRef.current.contains(event.target)
         ) {
        setIsNavMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavMenuOpen]);

  const closeMenu = () => {
    setIsNavMenuOpen(false);
  }

  const headerClasses = `site-header ${isHomePage ? 'is-home' : ''} ${isHeaderScrolled ? 'header-scrolled' : ''}`;

  return (
    <header
      className={headerClasses}
      ref={headerRef}
    >
      <div className="container header-container">
        <Link to="/" className="site-logo" onClick={closeMenu}>
          <img src={UcatapultLogo} alt="UCatapult Logo" className="logo-image" />
        </Link>

        <nav className={`main-nav ${isNavMenuOpen ? 'is-open' : ''}`} ref={navPanelRef}>
          <ul className="nav-links-list">
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">About Us</a>
              <ul className="dropdown-menu">
                <li><NavLink to="/about/what-we-do" className="dropdown-link" onClick={closeMenu}>What We Do</NavLink></li>
                <li><NavLink to="/about/how-we-do" className="dropdown-link" onClick={closeMenu}>How We Do</NavLink></li>
                <li><NavLink to="/about/core-values" className="dropdown-link" onClick={closeMenu}>Our Core Values</NavLink></li>
                <li><NavLink to="/about/our-journey" className="dropdown-link" onClick={closeMenu}>Our Journey</NavLink></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">Our Team & Partners</a>
              <ul className="dropdown-menu">
                <li><NavLink to="/team-partners/team" className="dropdown-link" onClick={closeMenu}>Team</NavLink></li>
                <li><NavLink to="/team-partners/partners" className="dropdown-link" onClick={closeMenu}>Partners</NavLink></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">Impact</a>
              <ul className="dropdown-menu">
                <li><NavLink to="/impact/stats" className="dropdown-link" onClick={closeMenu}>Statistics</NavLink></li>
                <li><NavLink to="/impact/testimonials" className="dropdown-link" onClick={closeMenu}>Testimonials</NavLink></li>
                <li><NavLink to="/impact/gallery" className="dropdown-link" onClick={closeMenu}>Gallery</NavLink></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="/school-registration" className="nav-link" onClick={closeMenu}>School Registration</NavLink></li>
          </ul>
        </nav>

        <div className="header-right-controls">
          <div className="header-donate-button">
             <NavLink to="/donate" className="button button-primary" onClick={closeMenu}>Donate</NavLink>
          </div>
          <button
            ref={navToggleRef}
            className={`nav-menu-toggle ${isNavMenuOpen ? 'is-active' : ''}`}
            onClick={toggleNavMenu}
            aria-expanded={isNavMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
