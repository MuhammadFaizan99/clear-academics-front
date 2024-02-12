import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      ©2014-2022 © STEAM Works Studio. All Rights Reserved.
      <a href="/privacy-policy" className={styles.privacyPolicyLink}>
        Privacy Policy
      </a>
    </div>
  );
}
