"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import Description from "../description";
import Countdown from "../../components/countdown";
import { Size, useWindowSize } from "../../utils/general";

const ProjLogo = "/assets/proj_logo.svg";
const CountdownImage = "/assets/countdown_image.png";

const Hero = () => {
  const projects_app = "https://acmurl.com/projects-app";

  const size: Size = useWindowSize();

  // size.width !== undefined determines whether the viewport has rendered yet
  const mobile = size.width !== undefined && size.width <= 920;

  return (
    <div className={styles.pageContent}>
      <section className={styles.hero}>
        <div className={styles.countdownImageWrapper} style={mobile ? {} : {display: "none"}}>
          <Image
            className={styles.countdownImage}
            src={CountdownImage}
            width={1162}
            height={1343}
            alt="Countdown"
          />
          <Countdown className={styles.countdown} />
        </div>
        <div className={styles.hero_main}>
          <div className={styles.title}>
            <Image 
              className={styles.titleLogo}
              src={ProjLogo}
              width={500}
              height={500}
              alt="Projects Logo"
            />
            <h1 className={styles.titleText}>ACM Projects</h1>
          </div>
          <p className={styles.description}>
            ACM Projects is our quarterly projects program where students work
            in a tight knit team. The program gives students the opportunity
            to be hands-on outside of courses in fields such as AI, design,
            and software engineering. The program culminates in a projects
            showcase and the finished product looks great on resumes. We
            welcome all skill levels to apply!
          </p>
          <div className={styles.application}>
            <a href={projects_app} target="_blank">
              <button className={styles.button}>
                Apply Now
                {/* Close */}
              </button>
            </a>
          </div>
        </div>
        <div className={styles.countdownImageWrapper} style={mobile ? {display: "none"} : {}}>
          <Image
            className={styles.countdownImage}
            src={CountdownImage}
            width={1162}
            height={1343}
            alt="Countdown"
          />
          <Countdown className={styles.countdown} />
        </div>
      </section>
      <Description />
    </div>
  );
};
export default Hero;