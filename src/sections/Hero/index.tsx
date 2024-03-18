"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import Description from "../description";

const Hero = () => {
  const projects_app = "https://acmurl.com/projects-app";

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <div className={styles.hero}>
          <div className={styles.hero_text}>
            <h1 className={styles.title}>ACM Projects</h1>
            <p className={styles.description}>
              ACM Projects is our quarterly projects program where students work
              in a tight knit team. The program gives students the opportunity
              to be hands-on outside of courses in fields such as AI, design,
              and software engineering. The program culminates in a projects
              showcase and the finished product looks great on resumes. We
              welcome all skill levels to apply!
            </p>
          </div>
          <img
            className={styles.image}
            src="/assets/nicole_team.jpg"
            alt="ACM Projects"
          />
          <div className={styles.application}>
            <a href={projects_app} target="_blank">
              <button className={styles.button}>
                Apply Now!
                {/* Close */}
              </button>
            </a>
            <div className={styles.deadline}>
              Applications Due <text>April 2nd, 11:59PM!</text>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
};
export default Hero;
