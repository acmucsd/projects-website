import s from "./style.module.scss";
import projects_data from "./projects.json";

// Images for embed links and other logos

const default_pic = "/assets/proj_logo.png";
const figma = "/assets/embeds/figma.png";
const github = "/assets/embeds/github.png";
const slides = "/assets/embeds/slides.png";
const other_links = "/assets/embeds/other_links.png";
const hack_logo = "/assets/hack.svg";
const design_logo = "/assets/design.svg";
const ai_logo = "/assets/ai.svg";

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