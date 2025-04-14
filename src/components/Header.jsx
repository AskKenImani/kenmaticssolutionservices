import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
            <a href="#home">
                 <img src="/assets/projects/logo.jpg" alt="My Logo" />
            </a>
        </div>

      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <ul>
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500} onClick={closeMenu}>Services</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="reviews" smooth={true} duration={500} onClick={closeMenu}>Reviews</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
