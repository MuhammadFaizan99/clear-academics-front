import React from 'react';
import styles from './Story.module.css';

export default function Story() {
  return (
    <div className={styles.storyContainer}>
      <h2 className={styles.header}>Our Story</h2>
      <p className={styles.content}>
       For them, struggling with trying to understand the material, feeling it unfair that something should come quite easy to one person but not to another, the discouragement of falling behind and the isolation that can come with academic difficulties since this one was shared was a lightbulb moment. What if no student had to feel that way again?
      </p>
      <p className={styles.content}>
      This is where the power of the community comes to play. Clear Academics is powered by people extending their generosity and support for the organization. Your donation can be a long way in several areas. It enables us to get better and more tutors, develop and improve materials for education, and expand to take more struggling students in an outreach proactive manner. Even the smallest of donations matter to help break the education barrier.
      </p>
      <p className={styles.content}>
      So, we make an honest plea to you: please, if you are able to, consider making a donation to Clear Academics. Your help would not only sustain and expand the service but also make every session we offer as beneficial and effective as possible. By working together, we can help make a profound impact on the lives of students, empowering them with success in overcoming academic challenges and reaching their potential.
      </p>
    </div>
  );
}