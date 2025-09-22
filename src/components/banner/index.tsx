"use client";

import { useState, useEffect, useMemo } from "react";
import {
  applicationDeadline,
  isUpcomingDeadline,
} from "@/src/config/applicationDeadline";
import styles from "./style.module.scss";

const Banner = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isExpired, setIsExpired] = useState(() => !isUpcomingDeadline());

  const target = useMemo(() => applicationDeadline, []);

  useEffect(() => {
    if (!target) {
      setIsExpired(true);
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        // The target date has passed, set all values to zero
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsExpired(true);
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
        setIsExpired(false);
      }
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (!target || isExpired) {
    return null;
  }

  return (
    <div>
      <div className={styles.bannerbg}>
        Projects applications close in{" "}
        <span className={styles.date}>
          {days} days {hours} hours {minutes} minutes {seconds} seconds
        </span>
      </div>
    </div>
  );
};

export default Banner;
