import React from "react";
import { MdSettings, MdAccessTime, MdVpnKey } from "react-icons/md";
import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.left}>
        <h2 className={styles.mainheading}>
        Tutoring
          <br /> Excellence
        </h2>
        <p className={styles.mainparagraph}>
        Our tutoring program is designed to cater to the varied educational needs of our community. With a focus on personalized attention and expert guidance, we're dedicated to delivering top-notch tutoring services to every student.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.service}>
          <MdSettings className={styles.icon} />
          <div>
            <h3 className={styles.heading}>Personalized Tutoring Sessions</h3>
            <p className={styles.paragraph}>
            We offer tailored tutoring sessions that meet the specific needs of each student, providing targeted insights and learning strategies to help them succeed.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <MdAccessTime className={styles.icon} />
          <div>
            <h3 className={styles.heading}>After-School Tutoring</h3>
            <p className={styles.paragraph}>
            Our tutoring services are available after school hours, from 3 PM to 8 PM, ensuring students have access to the support they need at convenient times.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <MdVpnKey className={styles.icon} />
          <div>
            <h3 className={styles.heading}>Accessible to All</h3>
            <p className={styles.paragraph}>
            While we prioritize assistance for low-income households, our program welcomes any student in need of free tutoring. We believe in equal opportunities for education for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
