import React from "react";
import { MdSettings, MdAccessTime, MdVpnKey } from "react-icons/md";
import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={styles.container} id="#about">
      <div className={styles.left}>
        <h2 className={styles.mainheading}>
          Service
          <br /> Excellence
        </h2>
        <p className={styles.mainparagraph}>
          Our array of services is tailored to meet your diverse needs. From
          personalized solutions to expert support, we’re committed to
          delivering excellence in every service we offer.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.service}>
          <MdSettings className={styles.icon} />
          <div>
            <h3 className={styles.heading}>Tailored Consultations</h3>
            <p className={styles.paragraph}>
              Benefit from personalized consultations that address your unique
              requirements, providing strategic insights and solutions.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <MdAccessTime className={styles.icon} />
          <div>
            <h3 className={styles.heading}>24/7 Customer Support</h3>
            <p className={styles.paragraph}>
              Enjoy peace of mind with our round-the-clock customer support,
              ensuring assistance whenever you need it, day or night.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <MdVpnKey className={styles.icon} />
          <div>
            <h3 className={styles.heading}>Efficient Project Management</h3>
            <p className={styles.paragraph}>
              Experience streamlined project execution with our expert project
              management services, ensuring timelines are met with precision and
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
