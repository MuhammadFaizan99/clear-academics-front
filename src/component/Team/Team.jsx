import React from 'react';
import { FaFacebookF, FaXing, FaLinkedinIn } from 'react-icons/fa';
import styles from './Team.module.css';

export default function Team() {
  return (
    <div className={styles.teamContainer} id="team">
      <h2>Our team</h2>
      <div className={styles.teamMembers}>
        
        <div className={styles.teamMember}>
          <img src="../../assets/Samantha Doe.jpg" alt="Samantha Doe" className={styles.memberImage} />
          <h3>Yassine M.</h3>
          <p className={styles.memberTitle}>Lead Developer</p>
          <p className={styles.memberDescription}>
          Yassine represents one of the key tech leads in our tutoring platform at Drexel University. He has outstanding development skills and a strong passion for new technologies. He really upgrades our educational offers.
          </p>
          <div className={styles.socialMedia}>
            <FaFacebookF />
            <FaXing />
            <FaLinkedinIn />
          </div>
        </div>
        
        <div className={styles.teamMember}>
          <img src="../../assets/Olivia Rodriguez.jpg" alt="Olivia Rodriguez" className={styles.memberImage} />
          <h3>Ibrahim B.</h3>
          <p className={styles.memberTitle}>Marketing Strategist</p>
          <p className={styles.memberDescription}>
          Ibrahim is studying for a Civil Engineering degree at Drexel University, and he is in charge of leading our marketing efforts with a strategic approach effectively expanding our reach and impact. 
          </p>
          <div className={styles.socialMedia}>
            <FaFacebookF />
            <FaXing />
            <FaLinkedinIn />
          </div>
        </div>

        <div className={styles.teamMember}>
          <img src="../../assets/Marcus Douglas.jpg" alt="Marcus Douglas" className={styles.memberImage} />
          <h3>William L.</h3>
          <p className={styles.memberTitle}>Fundraising Coordinator</p>
          <p className={styles.memberDescription}>
          William is a Drexel University Finance major who is in charge of leading our financial strategy, with a focus on raising funds for our growth and also providing community engagement in advancing the organization and society.
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
