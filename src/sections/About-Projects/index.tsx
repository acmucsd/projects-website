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
                    ACM Projects is our quarterly project program where students collaborate in close-knit teams alongside dedicated mentors. It’s an opportunity to gain hands-on experience beyond the classroom while exploring fields like AI, design, software engineering, and robotics. The program culminates in a projects showcase, giving teams the chance to share what they’ve built. Whether you’re a beginner or an experienced builder, all skill levels are welcome to apply!
                </p>
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