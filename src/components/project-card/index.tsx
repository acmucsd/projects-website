'use client'
import { useEffect, useLayoutEffect, useRef } from "react";
import s from "./style.module.scss";
import projects_data from "./projects.json";
import highlighted_ids from "./highlighted.json";

const SUBGROUP_CONFIG: Record<string, { logo: string; border: string; color: string; repoIcon: string; repoLabel: string }> = {
    Design: { logo: "/assets/design.svg", border: s.borderDesign, color: s.colorDesign, repoIcon: "/assets/embeds/figma-icon.svg", repoLabel: "Figma" },
    Hack: { logo: "/assets/hack.svg", border: s.borderHack, color: s.colorHack, repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" },
    AI: { logo: "/assets/ai.svg", border: s.borderAI, color: s.colorAI, repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" },
    Robotics: { logo: "/assets/robotics.svg", border: s.borderRobotics, color: s.colorRobotics, repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" },
};

const DEFAULT_CONFIG = { logo: "/assets/proj_logo.png", border: "", color: "", repoIcon: "/assets/embeds/github-icon.svg", repoLabel: "GitHub File" };

interface ProjectProps {
    quarter: string;
    highlighted?: boolean;
    subgroup?: string | null;
}

const ProjectCards: React.FC<ProjectProps> = ({ quarter, highlighted, subgroup }) => {
    let projects = quarter === "All"
        ? projects_data
        : projects_data.filter((project) => project.quarter === quarter);

    if (subgroup) {
        projects = projects.filter((project) => project.subgroup === subgroup);
    }

    if (highlighted !== undefined) {
        projects = projects.filter((project) =>
            highlighted ? highlighted_ids.includes(project.id) : !highlighted_ids.includes(project.id)
        );
    }

    projects = [...projects].sort((a, b) => a.team_name.localeCompare(b.team_name));

    const descWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

    const updateClamps = () => {
        const wrappers = descWrapperRefs.current;
        if (!wrappers) return;
        for (const wrapper of wrappers) {
            if (!wrapper) continue;
            const p = wrapper.querySelector("p") as HTMLParagraphElement | null;
            if (!p) continue;
            p.style.webkitLineClamp = "unset";
            const availableHeight = wrapper.clientHeight;
            const lineHeight = parseFloat(getComputedStyle(p).lineHeight);
            const lines = Math.max(1, Math.floor(availableHeight / lineHeight));
            p.style.webkitLineClamp = String(lines);
        }
    };

    useLayoutEffect(() => { updateClamps(); }, [projects.length]);

    useEffect(() => {
        window.addEventListener("resize", updateClamps);
        return () => window.removeEventListener("resize", updateClamps);
    }, []);

    return (
        <div className={s.container}>
            {projects.map((project, index) => {
                const config = SUBGROUP_CONFIG[project.subgroup] ?? DEFAULT_CONFIG;
                return (
                    <div className={`${s.card} ${config.border}`} key={project.id}>
                        <div className={s.cardHeader}>
                            <img className={s.teamLogo} src={config.logo} alt={`${project.subgroup} Logo`} />
                            <div className={s.cardHeaderText}>
                                <span className={s.cardQuarter}>{project.quarter}</span>
                                <span className={s.cardTeam}>{project.subgroup} {project.team_name}</span>
                            </div>
                        </div>

                        <div className={s.projectImageWrapper}>
                            <img
                                className={project.logo ? s.projectImage : s.projectImageDefault}
                                src={project.logo || config.logo}
                                alt={project.project_title}
                            />
                        </div>

                        <h3 className={`${s.projectTitle} ${config.color}`}>{project.project_title}</h3>

                        <div className={s.projectDetails}>
                            <p><strong>Created by:</strong> {project.members.join(", ")}</p>
                            <p><strong>Mentored by:</strong> {project.mentor}</p>
                        </div>

                        <div
                            className={s.descriptionWrapper}
                            ref={(el) => { descWrapperRefs.current[index] = el; }}
                        >
                            <p className={s.projectDescription}>{project.description}</p>
                        </div>

                        <div className={s.cardActions}>
                            <a href={`/archive/${project.project_title.toLowerCase().replace(/\s+/g, "-")}`} className={`${s.exploreButton} ${config.color}`}>
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
