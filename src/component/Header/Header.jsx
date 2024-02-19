import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 700;
      setIsMobile(mobileView);
      if (!mobileView) {
        setShowMenu(false); // Close the menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEnrollClick = () => {
    navigate('/enrollment-form');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="../../assets/logo.png" alt="Logo" className={styles.logo} />
      </div>
      {!isMobile && (
        <>
          <ul className={styles.navList}>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li> 
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <button className={styles.enrollButton} onClick={handleEnrollClick}>Enroll Now</button>
        </>
      )}
      {isMobile && (
        <div className={styles.hamburgerMenu} onClick={() => setShowMenu(!showMenu)}>
          <div className={`${styles.bar} ${showMenu ? styles.change : ''}`}></div>
          <div className={`${styles.bar} ${showMenu ? styles.change : ''}`}></div>
          <div className={`${styles.bar} ${showMenu ? styles.change : ''}`}></div>
        </div>
      )}
      {isMobile && showMenu && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li onClick={() => scrollToSection('about')}>About Us</li>
            <li onClick={() => scrollToSection('team')}>Team</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
            <li><button className={styles.enrollButton} onClick={handleEnrollClick}>Enroll Now</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;