"use client";

import { useState, useEffect } from "react";
import s from "../Timer/style.module.scss";
import ACMLogo from "../../../public/assets/acm_logo.png";

const projects_app = "";

const TimerHero: React.FC = () => {
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
    <section>
      <div className={s.hero__timer} id="home">
        <div className={s.hero__timer__header}>
          <div className={s.hero__timer__header}>
            {/* <p>Countdown To</p> */}
            <h1>Spring 2024 Project Application Closes In</h1>
            {/* <h1>Project Applications are Closed</h1> */}
          </div>

          <div className={s.hero__timer__time}>
            <div className={s.hero__timer__time__segment}>
              <span className={s.hero__timer__time__segment__digits}>
                {days}
              </span>
              <span className={s.hero__timer__time__segment__label}>days</span>
            </div>
            <span className={s.hero__timer__time__divider}>:</span>
            <div className={s.hero__timer__time__segment}>
              <span className={s.hero__timer__time__segment__digits}>
                {hours}
              </span>
              <span className={s.hero__timer__time__segment__label}>hours</span>
            </div>
            <span className={s.hero__timer__time__divider}>:</span>
            <div className={s.hero__timer__time__segment}>
              <span className={s.hero__timer__time__segment__digits}>
                {minutes}
              </span>
              <span className={s.hero__timer__time__segment__label}>mins</span>
            </div>
            <span className={s.hero__timer__time__divider}>:</span>
            <div className={s.hero__timer__time__segment}>
              <span className={s.hero__timer__time__segment__digits}>
                {seconds}
              </span>
              <span className={s.hero__timer__time__segment__label}>secs</span>
            </div>
          </div>
          <div className={s.description__info}>
            <a href={projects_app} target="_blank">
              <button>
                Apply Now!
                {/* Close */}
              </button>
            </a>
            {/* <div className={s.description__info__logo}>
            <img src={ACMLogo.src} alt="ACM Logo" />
          </div> */}
          </div>
        </div>
      </div>

      <div className={s.description} id="apply">
        <div className={s.description__info}>
          Interested in projects? Apply now for a Hack, Design or AI Team!
          <br />
          <br />
          <div className={s.projecttypes}>
            <div className={s.projectdescription}>
              <text className={s.ai}>AI</text> projects focus on all things AI,
              from natural language processing to computer vision and more!{" "}
            </div>
            <div className={s.projectdescription}>
              <text className={s.hack}>Hack</text> projects works through a full
              software engineering project, working to build a full MERN stack
              website, emulating a software engineering team working on the
              Agile process!
            </div>

            <div className={s.projectdescription}>
              <text className={s.design}>Design</text> projects work on creating
              or redesigning a platform, working through the design process from
              research to prototyping and more!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerHero;
