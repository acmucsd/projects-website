"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import timelineData from "./timelineData.json";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = timelineData.events[activeIndex];

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Projects Timeline</h2>

      <div className={styles.eventCard}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageDiamond}>
            <Image
              src="/assets/timeline_component_image.jpg"
              alt="Timeline"
              fill
              className={styles.diamondImage}
            />
          </div>
        </div>
        <div className={styles.eventInfo}>
          <h3 className={styles.eventDate}>{activeEvent.date}</h3>
          <p className={styles.eventDescription}>
            {activeEvent.description}
          </p>
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {timelineData.events.map((event, index) => (
          <button
            key={index}
            className={styles.milestone}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <div
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
            />
            <span
              className={`${styles.milestoneLabel} ${index === activeIndex ? styles.milestoneLabelActive : ""}`}
            >
              {event.label}
            </span>
          </button>
        ))}
      </div>

      <a
        href={timelineData.applyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.applyButton}>Apply Here</button>
      </a>
    </section>
  );
};

export default Timeline;
