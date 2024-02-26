import React from 'react';
import { FaFacebookF, FaXing, FaLinkedinIn } from 'react-icons/fa';
import styles from './Team.module.css';

export default function Team() {
  return (
    <div className={styles.teamContainer} id="team">
      <h2>Our team</h2>
      <div className={styles.teamMembers}>
        
        <div className={styles.teamMember}>
          <img src="../../../assets/Image-1.png" alt="Yassine M." className={styles.memberImage} />
          <h3>Yassine M.</h3>
          <p className={styles.memberTitle}>Lead Developer</p>
          <p className={styles.memberDescription}>
          Yassine represents one of the key tech leads in our tutoring platform at Drexel University. He has outstanding development skills and a strong passion for new technologies. He really upgrades our educational offers.
          </p>
          <a target='__black' href='https://www.linkedin.com/in/yassinemijane/' className={styles.socialMedia}>
            <FaLinkedinIn />
          </a>
        </div>
        
        <div className={styles.teamMember}>
          <img src="../../../assets/Image-3.png" alt="Ibrahim B." className={styles.memberImage} />
          <h3>Ibrahim B.</h3>
          <p className={styles.memberTitle}>Marketing Strategist</p>
          <p className={styles.memberDescription}>
          Ibrahim is studying for a Civil Engineering degree at Drexel University, and he is in charge of leading our marketing efforts with a strategic approach effectively expanding our reach and impact. 
          </p>
          <a target='__black' href='https://www.linkedin.com/in/ibrahim-bassyouny-970641281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className={styles.socialMedia}>
            <FaLinkedinIn />
          </a>
        </div>

        <div className={styles.teamMember}>
          <img src="../../../assets/Image-2.jpg" alt="William L." className={styles.memberImage} />
          <h3>Willem L.</h3>
          <p className={styles.memberTitle}>Fundraising Coordinator</p>
          <p className={styles.memberDescription}>
          William is a Drexel University Finance major who is in charge of leading our financial strategy, with a focus on raising funds for our growth and also providing community engagement in advancing the organization and society.
          </p>
          <a target='__black' href='https://www.linkedin.com/in/willem-lobley-97837829a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className={styles.socialMedia}>
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </div>
  );
}
