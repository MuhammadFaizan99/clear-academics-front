import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      ©2024 © ClearAcademics. All Rights Reserved.
      <a href="/privacy-policy" className={styles.privacyPolicyLink}>
        Privacy Policy
      </a>
    </div>
  );
}
