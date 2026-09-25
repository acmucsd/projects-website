"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import timelineData from "./timelineData.json";

function formatTimelineDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getInitialIndex(): number {
  const now = new Date();
  const index = timelineData.events.findIndex(
    (event) => new Date(`${event.date}T00:00:00Z`) >= now
  );
  return index === -1 ? timelineData.events.length - 1 : index;
}

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(getInitialIndex);
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
          <h3 className={styles.eventDate}>
            {formatTimelineDate(activeEvent.date)}
          </h3>
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
        className={styles.applyButton}
      >
        Apply Here
      </a>
    </section>
  );
};

export default Timeline;
