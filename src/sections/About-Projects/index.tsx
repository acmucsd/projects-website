'use client';
import s from './style.module.scss';
import TeamCards from "../../components/team-card";
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const About: React.FC = () => {

    return (
        <div className={s.aboutSection} id="about">
            <div className={s.container}>
              <div>
                <div className={s.banner}>
                    <Image src="/assets/about_us_stock.png" width={1253} height={357} alt="ACM Projects" className={s.carousel_img}/>
                </div>
                <h1>About ACM Projects</h1>
                <p>
                  ACM Projects is our quarterly projects program where students work in a tight knit team. The program gives students the opportunity to be hands-on outside of courses in fields such as AI, design, and software engineering. The program culminates in a projects showcase and the finished product looks great on resumes. We welcome all skill levels to apply!                </p>
              </div>
              <div className={s.teamContainer}>
                <h1>Meet our Team</h1>
                <TeamCards />
              </div>
            </div>
        </div>
    );
};

export default About;