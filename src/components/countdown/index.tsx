"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.scss";

type CountdownProps = {
  className?: string;
};

const Countdown = ({ className = "" }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const target = new Date("2026-10-02T23:59:59-07:00").getTime();
    
    setTimeLeft(target - Date.now());

    const interval = setInterval(() => {
      const remaining = target - Date.now();

      if (remaining <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(remaining);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const displayTime = timeLeft > 0 ? timeLeft : 0;
  const days = Math.floor(displayTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((displayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((displayTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((displayTime % (1000 * 60)) / 1000);

  const countdownComponents = [days, hours, minutes, seconds];

  return (
    <div className={`${styles.date} ${className}`}>
      {countdownComponents.map((comp, compIdx) => {
        const digits = String(comp).padStart(2, '0').split('');

        return (
          <span key={compIdx}>
            {digits.map((digit, digitIdx) =>
              <span key={digitIdx} className={styles.digit}>{digit}</span>
            )}
            {compIdx < countdownComponents.length - 1 ? <span>:</span> : null}
          </span>
        );
      })}
    </div>
  );
};

export default Countdown;
