import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import styles from './Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [menuIcon, setMenuIcon] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setMenuIcon(!menuIcon);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
      setShowMenu(false); // Close the menu when resizing
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEnrollClick = () => {
    navigate('/enrollment-form');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <ul className={styles.navList}>
          {/* Call scrollToAbout function onClick */}
          <li><a href="#about" onClick={scrollToAbout}>About Us</a></li> 
          <li><Link to="/">Team</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </div>
      <div className={styles.middle}>
        <img src="../../assets/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        {/* Use handleEnrollClick function as onClick handler */}
        <button className={styles.enrollButton} onClick={handleEnrollClick}>Enroll Now</button>
      </div>
      {isMobile && (
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={`${styles.bar} ${menuIcon ? styles.change : ''}`}></div>
          <div className={`${styles.bar} ${menuIcon ? styles.change : ''}`}></div>
          <div className={`${styles.bar} ${menuIcon ? styles.change : ''}`}></div>
        </div>
      )}
      {showMenu && isMobile && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li onClick={scrollToAbout}>About Us</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
          {/* Use handleEnrollClick function as onClick handler */}
          <button className={styles.enrollButton} onClick={handleEnrollClick}>Enroll Now</button>
        </div>
      )}
    </header>
  );
};

export default Header;
