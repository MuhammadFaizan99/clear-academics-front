import React from 'react';
import { FaFacebookF, FaXing, FaLinkedinIn } from 'react-icons/fa';
import styles from './Team.module.css';

export default function Team() {
  return (
    <div className={styles.teamContainer}>
      <h2>Our team</h2>
      <div className={styles.teamMembers}>
        
        <div className={styles.teamMember}>
          <img src="../../../public/assets/Samantha Doe.jpg" alt="Samantha Doe" className={styles.memberImage} />
          <h3>Samantha Doe</h3>
          <p className={styles.memberTitle}>LEAD STRATEGIST</p>
          <p className={styles.memberDescription}>
            A flair for crafting compelling campaigns that resonate with target audiences, driving
            brand visibility & engagement.
          </p>
          <div className={styles.socialMedia}>
            <FaFacebookF />
            <FaXing />
            <FaLinkedinIn />
          </div>
        </div>
        
        <div className={styles.teamMember}>
          <img src="../../../public/assets/Olivia Rodriguez.jpg" alt="Olivia Rodriguez" className={styles.memberImage} />
          <h3>Olivia Rodriguez</h3>
          <p className={styles.memberTitle}>FINANCIAL ANALYST</p>
          <p className={styles.memberDescription}>
            Detail-oriented financial expert adept at analyzing data, providing strategic insights
            to optimize fiscal decision-making.
          </p>
          <div className={styles.socialMedia}>
            <FaFacebookF />
            <FaXing />
            <FaLinkedinIn />
          </div>
        </div>

        <div className={styles.teamMember}>
          <img src="../../../public/assets/Marcus Douglas.jpg" alt="Marcus Douglas" className={styles.memberImage} />
          <h3>Marcus Douglas</h3>
          <p className={styles.memberTitle}>SOFTWARE ENGINEER</p>
          <p className={styles.memberDescription}>
            Tech enthusiast, specializing in developing robust & scalable software solutions that
            elevate user experiences.
          </p>
          <div className={styles.socialMedia}>
            <FaFacebookF />
            <FaXing />
            <FaLinkedinIn />
          </div>
        </div>

      </div>
    </div>
  );
}
