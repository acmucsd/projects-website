"use client"

import { useState, useEffect } from "react";
import s from "../Timer/style.module.scss";


const TimerHero: React.FC = () => {


  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {

    const target = new Date("10/23/2023 23:59:59")

    const interval = setInterval(() =>{
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)
    
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000)



    return () => clearInterval(interval)

  }, [])

  return (
    <section className={s.hero__timer}>
      <div className={s.hero__timer__grid}>
        <div className={s.hero__timer__grid__header}>
          <p>Countdown To</p>
          <h1>Fall 2023 Project Application Opening</h1>          
        </div>
        <div className="flex flex-row">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Days</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
          
      </div>
    </section>
  );
};

export default TimerHero;