import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
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

  const handleSectionClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust delay as needed to ensure smooth scrolling
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="../../assets/logo.png" alt="Logo" className={styles.logo} />
      </div>
      {!isMobile && (
        <>
          <ul className={styles.navList}>
            <li><Link to="/#about" onClick={() => handleSectionClick('about')}>About Us</Link></li> 
            <li><Link to="/#team" onClick={() => handleSectionClick('team')}>Team</Link></li>
            <li><Link to="/#contact" onClick={() => handleSectionClick('contact')}>Contact</Link></li>
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
            <li onClick={() => {handleSectionClick('about'); setShowMenu(false);}}>About Us</li>
            <li onClick={() => {handleSectionClick('team'); setShowMenu(false);}}>Team</li>
            <li onClick={() => {handleSectionClick('contact'); setShowMenu(false);}}>Contact</li>
            <li><button className={styles.enrollButton} onClick={handleEnrollClick}>Enroll Now</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;