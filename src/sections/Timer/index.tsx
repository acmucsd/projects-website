"use client"

import { useState, useEffect } from "react";
import s from "../Timer/style.module.scss";
import ACMLogo from "../../../public/assets/acm_logo.svg"


const TimerHero: React.FC = () => {


  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {

    const target = new Date("9/25/2023 08:00:00")

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
    <section>
      <div className={s.hero__timer}>
        <div className={s.hero__timer__header}>
          <div className={s.hero__timer__header}>
            <p>Countdown To</p>
            <h1>Fall 2023 Project Application Opening</h1>          
          </div>
          
          <div className={s.hero__timer__time}>
                <div className={s.hero__timer__time__segment}>
                  <span className={s.hero__timer__time__segment__digits}>{days}</span>
                  <span className={s.hero__timer__time__segment__label}>days</span>
                </div>
                <span className={s.hero__timer__time__divider}>:</span>
                <div className={s.hero__timer__time__segment}>
                  <span className={s.hero__timer__time__segment__digits}>{hours}</span>
                  <span className={s.hero__timer__time__segment__label}>hours</span>
                </div>
                <span className={s.hero__timer__time__divider}>:</span>
                <div className={s.hero__timer__time__segment}>
                  <span className={s.hero__timer__time__segment__digits}>{minutes}</span>
                  <span className={s.hero__timer__time__segment__label}>mins</span>
                </div>
                <span className={s.hero__timer__time__divider}>:</span>
                <div className={s.hero__timer__time__segment}>
                  <span className={s.hero__timer__time__segment__digits}>{seconds}</span>
                  <span className={s.hero__timer__time__segment__label}>secs</span>
                </div>
            
          </div>
          
        </div>
      </div>


      <div className={s.description}>
        <div className={s.description__info}>
          <button>
          Apply Now
          </button>
          <p>The application for ACM Projects is now closed. Applications will reopen in Fall 2023.</p>
          <div className={s.description__info__logo}>
            <img src={ACMLogo.src} alt="ACM Logo" />

          </div>
        </div>
        <div className={s.description__info}>
        ACM Projects is our quarterly projects program where students work in a tight knit team. The program gives students the opportunity to be hands-on outside of courses in fields such as AI, design, and software engineering. The program culminates in a projects showcase and the finished product looks great on resumes. We welcome all skill levels to apply!
        </div>
      </div>
      
    </section>
  );
};

export default TimerHero;