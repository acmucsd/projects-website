import s from "./style.module.scss";

// Images for embed links and other logos

const default_pic = "/assets/proj_logo.png";
const figma = "/assets/embeds/figma.png";
const github = "/assets/embeds/github.png";
const slides = "/assets/embeds/slides.png";
const other_links = "/assets/embeds/other_links.png";
const hack_logo = "/assets/hack.svg";
const design_logo = "/assets/design.svg";
const ai_logo = "/assets/ai.svg";

const projects_data = [
    {"quarter": "Spring 2023",
    "subgroup": "Hack",
    "project_title": "Word Nerd",
    "team_name": "Team 1",
    "logo": "/assets/project_logos/word_nerd.png",
    "description": "We created a clone of the game CodeNames, except that users have the option to upload their own words so they can follow a theme or use it as a unique way to study vocab concepts with friends.",
    "mentor": "Sujal",
    "members": ["Greg Weber (Front-end)", "Julie Nguyen (Front-end)", "Josh Chen (Front-end)", "Tim Liu (Back-end)", "Gonzalo Allen-Perez (Back-end)", "Annie Ping (Back-end)"],
    "slides": "https://docs.google.com/presentation/d/1xPRnYbfmZHW8l7_jo7gmTAxowV3PmLO39MvzfHht_Dk/edit?usp=sharing",
    "project_link": "https://github.com/acmucsd-projects/sp23-hack-team-1",
    "other_links": "https://codenames-acm.netlify.app/"
    },
    {"quarter": "Spring 2023",
    "subgroup": "Hack",
    "project_title": "GAMED",
    "team_name": "Team 2",
    "logo": "/assets/project_logos/gamed.png",
    "description": "We created a website where UCSD students can find other players to play video games with. They can do this by creating an account, creating cards, and sending cards to people!.",
    "mentor": "Shreya Nagunuri and Kevin Wu",
    "members": ["Calvin Nguyen (Front-end)", "Kane Li (Full-stack)"],
    "slides": "https://docs.google.com/presentation/d/1W-3JfpnNEghKXsuuCe1638ZBUkyCkntRNy6yUnFhr_4/edit?usp=sharing",
    "project_link": "https://github.com/acmucsd-projects/sp23-hack-team-2",
    "other_links": "https://ucsdgamed.onrender.com/"
    },
    {"quarter": "Spring 2023",
    "subgroup": "Hack",
    "project_title": "Eventify",
    "team_name": "Team 3",
    "logo": "/assets/project_logos/eventify.png",
    "description": "We created a website that can track on-campus UCSD events.",
    "mentor": "Angela Hu and Charvi Shukla",
    "members": ["Gavyn Ezell", "Cho Jung (Angela) Tsai", "Qijun (Mary) Hu", "Jae Whan Lee", "Rachel Chau", "Willey Zhou"],
    "slides": "https://docs.google.com/presentation/d/1U93WsdyVuFDbvgWZ931oakEpL7zgzbZz8vNolmMZtFI/edit?usp=sharing",
    "project_link": "https://github.com/acmucsd-projects/sp23-hack-team-3",
    "other_links": "https://www.figma.com/file/KqvP7N6lLUu8NnT2ZnYK3o/Eventify?type=design&node-id=0%3A1&mode=design&t=hnFUTSx4agxe4CNT-1"
    },
    {"quarter": "Winter 2023",
    "subgroup": "Hack",
    "project_title": "IGFood",
    "team_name": "Team 1",
    "logo": "/assets/project_logos/ig_food.svg",
    "description": "Yelp and Google Reviews are written by strangers that you cannot necessarily trust. Our solution is to create an application which creates a more personalized food-rating experience! The application connects you to your friends and allows you to see what/where your friends are eating via posts on a feed.",
    "mentor": "Nikhil Dange",
    "members": ["Angela Hu (Project Lead/Front-end)", "Nicholas Cheah (Front-end)", "Kinan Alatasi (Front-end)", "Alexis Vergnet (Back-end)", "Charvi Shukla (Back-end)", "Jason Wong (Back-end)"],
    "slides": "https://docs.google.com/presentation/d/1g0pEKT7Rx_hoZDnC27zxxPs2UqipDLffgUC0Z0v5xUE/edit?usp=sharing",
    "project_link": "https://github.com/acmucsd-projects/wi23-hack-team-1",
    "other_links": "https://www.figma.com/file/lX9VzkvBHesJT4e2zK6LOr/IGFood-Web-App-Design?type=design&node-id=0%3A1&mode=design&t=Z6gg0vyLGspHj7r5-1"
    },
    {"quarter": "Winter 2023",
    "subgroup": "Design",
    "project_title": "Triton2Go Redesign",
    "team_name": "Team 1",
    "description": "Recognizing the indispensable role of food ordering apps in the UCSD students’ daily lives, our team aimed to focus on the official food ordering mobile app Triton2Go (Mobile Order) by redesigning both the visual layouts and content layouts to optimize the user interface, streamline the ordering process, incorporate engaging gamification elements in rewards store to encourage user loyalty and satisfaction. We hope to help our target users and make the end process intelligent, enjoyable, and productive.",
    "mentor": "Anmol",
    "members": ["Cindy Peng (Project Lead)", "Thomas Wang", "Dianne Natanauan", "Amy To"],
    "slides": "https://docs.google.com/presentation/d/1eCxEr19T1yPc1zffcvXHE9n0KPUSUy6G87tE_Ub_9Fk/edit?usp=sharing",
    "project_link": "https://www.figma.com/file/0r2ncVSKHqBY9pOQCGrHvq/Mobile-Order-Prototypes?type=design&node-id=0%3A1&t=33a883iMHphAA1U1-1"
    },
    {"quarter": "Fall 2022",
    "subgroup": "AI",
    "project_title": "Supreme Court Predictor",
    "team_name": "Team 1",
    "description": "Using machine learning, predict the outcomes of Supreme Court Cases (whether they are conservative, liberal, or unspecifiable).",
    "mentor": "Stephanie",
    "members": ["Jenny Mar", "Nitya Pillai", "Ada He", "Han Hoang", "Rushil Chandrupatla", "Serena Chen"],
    "slides": "https://docs.google.com/presentation/d/1qANpLZvhv5F0lOkbUxtlJU5UF4KqsDzuy0Dy6E2BG-0/edit?usp=sharing",
    "project_link": "https://github.com/acmucsd-projects/fa22-ai-team-1",
    "other_links": "https://deepnote.com/join-team?token=02d34e715c9e4f6"
    },
    {"quarter": "Fall 2022",
    "subgroup": "AI",
    "project_title": "GAIN: Gamers for Artificial Intelligence and NLP",
    "team_name": "Team 2",
    "description": "Using NLP and Machine Learning, created a Political Sentiment Classifier that can address blocks of texts and determine whether they are politically charged and classify them as Liberal or Democratic. ",
    "mentor": "Weiji Chen",
    "members": ["Samvrit Srinath", "Calvin Nguyen", "Peter Gao", "Benjamin Johnson", "Skyler Goh", "Joon Kim"],
    "slides": "https://docs.google.com/presentation/d/1s7W3E9Wv5RXAzmgQYjCN166xycIJuxyFnCbs_IpVBlw/edit?usp=sharing",
    "project_link": "https://github.com/acmucsd-projects/fa22-ai-team-2",
    "other_links": "https://colab.research.google.com/drive/1zfL2UtCyJnwAMzqeAAvfTigUU6rVxCca?usp=sharing"
    },
    {"quarter": "Fall 2022",
    "subgroup": "Design",
    "project_title": "UCSD App Redesign",
    "team_name": "Team 1",
    "description": "We redesigned the UCSD mobile app to increase its functionality and aesthetic appeal, helping students navigate it with more ease, efficiency, and less confusion.",
    "mentor": "Anthony Manrique",
    "members": ["Tammy Ding","Khoi Nguyen", "Caitlyn Cielo", "Sashwat Nayak"],
    "slides": "https://docs.google.com/presentation/d/1NBU4o8cFqalW_I9UUo_t_h7XsHVtjGcQ7hVZUzqO0qg/edit?usp=sharing",
    "project_link": "https://www.figma.com/file/8kuHJXTZcIGVjm88OCYi1W/Final-Draft?type=design&node-id=1%3A2&t=K7vUmdAhPcQpWj6O-1"
    },
];

interface ProjectProps {
    quarter: string;
}

const ProjectCards: React.FC<ProjectProps> = ({quarter}) => {
    const filteredProjects = quarter === "All" ? projects_data : projects_data.filter((project) =>
    project.quarter === quarter
  );
    return (
        <div className={s.container}>
            {filteredProjects && filteredProjects.map((project, index) => (
                <div className={s.projectItem} key={index}>
                    <div className={s.header}>
                        <div className={s.team}>
                            <img className={s.community_logo} src={project.subgroup === "AI" ? ai_logo : project.subgroup === "Hack" ? hack_logo : project.subgroup === "Design" ? design_logo : default_pic} alt="Community Logo"/>
                            <h1 className={`${s[project.subgroup]}`}>{project.quarter} {project.subgroup} {project.team_name}</h1>
                        </div>
                    <h3>{project.project_title}</h3>
                    </div>
                    <img className={s.logo} src={project.logo || default_pic} alt="Project Logo" />
                    <div className={s.description}>
                        <h4>Project Description: {project.description}</h4>
                        <h4>Members: {project.members.join(", ")}</h4>
                        <h4>Mentor: {project.mentor}</h4>
                    </div>
                    <div className={s.project_links}>
                        <a href={project.slides}>
                            <img className={s.links} src={slides} alt="Slides Logo"/>
                        </a>
                        <a href={project.project_link}><img className={s.links}
                        src={project.subgroup === "Hack" || project.subgroup === "AI" ? github : project.subgroup === "Design" ? figma : default_pic} alt="Project Repo Logo"/></a>
                        {project.other_links && (
                            <a href={project.other_links}><img className={s.links} src={other_links} alt="Other Links Logo"/></a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCards;