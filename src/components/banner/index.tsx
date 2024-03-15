"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.scss";

const Banner = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/02/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        // The target date has passed, set all values to zero
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);

        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.bannerbg}>
        Projects applications close in{" "}
        <text className={styles.date}>
          {days} days {hours} hours {minutes} minutes {seconds} seconds
        </text>
      </div>
    </div>
  );
};

export default Banner;
