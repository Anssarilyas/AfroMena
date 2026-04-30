import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-complex" onClick={closeMenu}>
          <div className="logo-icon-wrapper">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-main">AfroMena IP</span>
            <span className="logo-sub">INTELLECTUAL PROPERTY</span>
          </div>
        </Link>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>HOME</NavLink>
          <NavLink to="/about" onClick={closeMenu}>ABOUT US</NavLink>
          <NavLink to="/services" onClick={closeMenu}>SERVICES</NavLink>
          <NavLink to="/locations" onClick={closeMenu}>LOCATIONS</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink>
        </div>
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
