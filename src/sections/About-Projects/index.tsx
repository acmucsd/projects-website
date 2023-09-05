import s from './style.module.scss';
import TeamCards from "../../components/team-card";

const About: React.FC = () => {
    return (
        <div className={s.aboutSection}>
            <div className={s.container}>
                <img src="/assets/nicole_team.jpg" alt="Project Team"/>
                <span>
                    ACM Projects is our quarterly projects program where students work in a tight knit team. The program gives students the opportunity to be hands-on outside of courses in fields such as AI, design, and software engineering. The program culminates in a projects showcase and the finished product looks great on resumes. We welcome all skill levels to apply!
                </span>
            </div>
            <h1>Meet the Team</h1>
            <TeamCards />
            <div className={s.logosContainer}>
                <img src="/assets/ai_name_logo.svg" alt="AI Logo"/>
                <img src="/assets/design_name_logo.svg" alt="Design Logo"/>
                <img src="/assets/hack_name_logo.svg" alt="Hack Logo"/>
            </div>
        </div>
    );
};

export default About;