'use client'
import s from "./style.module.scss";
import projects_data from "./projects.json";

interface ProjectProps {
    quarter: string;
    highlighted?: boolean;
}

const SUBGROUP_CONFIG: Record<string, { logo: string; border: string; color: string; repoIcon: string; repoLabel: string }> = {
    Design: { logo: "/assets/design.svg", border: s.borderDesign, color: s.colorDesign, repoIcon: "/assets/embeds/figma-icon.svg", repoLabel: "Figma" },
    Hack:   { logo: "/assets/hack.svg",   border: s.borderHack,   color: s.colorHack,   repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" },
    AI:     { logo: "/assets/ai.svg",      border: s.borderAI,     color: s.colorAI,     repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" },
};

const DEFAULT_CONFIG = { logo: "/assets/proj_logo.png", border: "", color: "", repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" };

const ProjectCards: React.FC<ProjectProps> = ({ quarter, highlighted }) => {
    let projects = quarter === "All"
        ? projects_data
        : projects_data.filter((project) => project.quarter === quarter);

    if (highlighted !== undefined) {
        projects = projects.filter((project) =>
            highlighted ? project.team_name === "Team 1" : project.team_name !== "Team 1"
        );
    }

    projects = [...projects].sort((a, b) => a.team_name.localeCompare(b.team_name));

    return (
        <div className={s.container}>
            {projects.map((project, index) => {
                const config = SUBGROUP_CONFIG[project.subgroup] ?? DEFAULT_CONFIG;
                return (
                    <div className={`${s.card} ${config.border}`} key={index}>
                        <div className={s.cardHeader}>
                            <img className={s.teamLogo} src={config.logo} alt={`${project.subgroup} Logo`} />
                            <div className={s.cardHeaderText}>
                                <span className={s.cardQuarter}>{project.quarter}</span>
                                <span className={s.cardTeam}>{project.subgroup} {project.team_name}</span>
                            </div>
                        </div>

                        {project.logo && (
                            <img className={s.projectImage} src={project.logo} alt={project.project_title} />
                        )}

                        <h3 className={`${s.projectTitle} ${config.color}`}>{project.project_title}</h3>

                        <div className={s.projectDetails}>
                            <p><strong>Created by:</strong> {project.members.join(", ")}</p>
                            <p><strong>Mentored by:</strong> {project.mentor}</p>
                        </div>

                        <p className={s.projectDescription}>{project.description}</p>

                        <div className={s.cardActions}>
                            <a href={project.project_link} className={`${s.exploreButton} ${config.color}`} target="_blank" rel="noopener noreferrer">
                                Explore Project
                            </a>
                            <a href={project.project_link} className={s.repoButton} target="_blank" rel="noopener noreferrer">
                                <img className={s.repoIcon} src={config.repoIcon} alt={config.repoLabel} />
                                {config.repoLabel}
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCards;
