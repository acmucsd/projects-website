"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.scss";

type CountdownProps = {
  className?: string;
};

const Countdown = ({ className = "" }: CountdownProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/04/2026 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
      } else {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
        );
        setMinutes(
          Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        );
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.date} ${className}`}>
      {String(days).padStart(2, '0')}:
      {String(hours).padStart(2, '0')}:
      {String(minutes).padStart(2, '0')}:
      {String(seconds).padStart(2, '0')}
    </div>
  );
};

export default Countdown;
