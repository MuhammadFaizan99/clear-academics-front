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
  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <ul className={styles.navList}>
          {/* Call scrollToAbout function onClick */}
          <li><a href="#about" onClick={scrollToAbout}>About Us</a></li> 
          <li><a href="#team" onClick={scrollToTeam}>Team</a></li>
          <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
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
