import React from "react";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193310.88197913602!2d-75.22489910192707!3d39.95258397908658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62b5ae0b1d5%3A0x9a4f7b5d3bfa6b8!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1644550808923!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className={styles.mapIframe}
        ></iframe>
      </div>
      <div className={styles.contactInfo}>
        <h2>Contact us</h2>
        <p>
          Got questions or ready to start a project? We're all ears! Reach out
          to us today to discuss your ideas, schedule a consultation, or simply
          say hello. We can't wait to hear from you!
        </p>
        <div className={styles.mainContactDetails}>
          <div className={styles.contactDetails}>
            <IoMdCall className={styles.icon} />
            <span className={styles.description}>425-334-5956</span>
          </div>
          <div className={styles.contactDetails}>
            <IoMdMail className={styles.icon} />
            <span className={styles.description}>youremail@address.com</span>
          </div>
          <div className={styles.contactDetails}>
            <IoMdPin className={styles.icon} />
            <span className={styles.description}>
              4923 Ryder Avenue, Iceland
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
