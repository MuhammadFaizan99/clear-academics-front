import React from 'react';
import styles from './Story.module.css';

export default function Story() {
  return (
    <div className={styles.storyContainer}>
      <h2 className={styles.header}>Origin Story</h2>
      <p className={styles.content}>
        Eliza Blank founded The Sill in 2012. Passionate about plants, she wanted to help
        demystify them, make them accessible to non-horticulturists and elevate the experience
        beyond the local garden supply center.
      </p>
      <p className={styles.content}>
        She broke new ground with an online plant delivery business that has grown to include
        stores in New York City, Los Angeles and San Francisco. Hands-on educational
        workshops are now hosted in-store and online, and the brand vision has expanded
        beyond plants to include biophilic design that evokes an essential connection to the
        natural world.
      </p>
      <p className={styles.quote}>
        As Eliza says, "Plants create time and space to nurture yourself. If you're not making
        time for them, you're probably not making time for yourself either."
      </p>
      <p className={styles.footer}>
        The Sill is here to help you connect to plants and nature, so you can cultivate a life well-lived.
      </p>
    </div>
  );
}