import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import UcatapultLogo from '../../assets/images/ucatapult logo.png';

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navPanelRef = useRef(null);
  const headerRef = useRef(null);
  const navToggleRef = useRef(null);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
    setOpenDropdown(null); // Close dropdowns when closing menu
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
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
        setOpenDropdown(null);
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
    setOpenDropdown(null);
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
            <li className={`nav-item has-dropdown ${openDropdown === 'who-we-are' ? 'is-open' : ''}`}>
              <div className="nav-link" onClick={() => handleDropdownToggle('who-we-are')}>
                Who We Are <span className="dropdown-caret"></span>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-heading">Who We Are</li>
                <li><NavLink to="/who-we-are/our-approach" className="dropdown-link" onClick={closeMenu}>Our Approach</NavLink></li>
                <li><NavLink to="/who-we-are/our-journey" className="dropdown-link" onClick={closeMenu}>Our Journey</NavLink></li>
                <li><NavLink to="/who-we-are/people-and-partners" className="dropdown-link" onClick={closeMenu}>People & Partners</NavLink></li>
                <li><NavLink to="/who-we-are/annual-reports" className="dropdown-link" onClick={closeMenu}>Annual Reports</NavLink></li>
                <li><NavLink to="/who-we-are/our-core-values" className="dropdown-link" onClick={closeMenu}>Our Core Values</NavLink></li>
              </ul>
            </li>
            <li className={`nav-item has-dropdown ${openDropdown === 'what-we-do' ? 'is-open' : ''}`}>
              <div className="nav-link" onClick={() => handleDropdownToggle('what-we-do')}>
                What We Do <span className="dropdown-caret"></span>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-heading">What We Do</li>
                <li><NavLink to="/what-we-do/digital-machaan" className="dropdown-link" onClick={closeMenu}>Digital Machaan</NavLink></li>
                <li><NavLink to="/what-we-do/buddy-program" className="dropdown-link" onClick={closeMenu}>Buddy Program</NavLink></li>
                <li><NavLink to="/what-we-do/project-cheshta" className="dropdown-link" onClick={closeMenu}>Project Cheshta</NavLink></li>
              </ul>
            </li>
            <li className={`nav-item has-dropdown ${openDropdown === 'work-with-us' ? 'is-open' : ''}`}>
              <div className="nav-link" onClick={() => handleDropdownToggle('work-with-us')}>
                Work With Us <span className="dropdown-caret"></span>
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-heading">Work With Us</li>
                <li><NavLink to="/work-with-us/join-our-team" className="dropdown-link" onClick={closeMenu}>Join Our Team</NavLink></li>
                <li><NavLink to="/work-with-us/contact-us" className="dropdown-link" onClick={closeMenu}>Contact Us</NavLink></li>
              </ul>
            </li>
            <li className="nav-item mobile-donate-button">
                <NavLink to="/donate" className="button button-primary" onClick={closeMenu}>Donate</NavLink>
            </li>
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
