'use client'
import Link from 'next/link';
import s from './style.module.scss';
import projects_data from '../../components/project-card/projects.json';

const SUBGROUP_CONFIG: Record<string, {
    logo: string;
    border: string;
    color: string;
    repoIcon: string;
    repoLabel: string;
}> = {
    Design: {
        logo: "/assets/design.svg",
        border: s.borderDesign,
        color: s.colorDesign,
        repoIcon: "/assets/embeds/figma-icon.svg",
        repoLabel: "Figma File",
    },
    Hack: {
        logo: "/assets/hack.svg",
        border: s.borderHack,
        color: s.colorHack,
        repoIcon: "/assets/embeds/github-icon.svg",
        repoLabel: "GitHub File",
    },
    AI: {
        logo: "/assets/ai.svg",
        border: s.borderAI,
        color: s.colorAI,
        repoIcon: "/assets/embeds/github-icon.svg",
        repoLabel: "GitHub File",
    },
    Robotics: {
        logo: "/assets/robo.svg",
        border: s.borderRobotics,
        color: s.colorRobotics,
        repoIcon: "/assets/embeds/github-icon.svg",
        repoLabel: "GitHub File",
    },
};

const DEFAULT_CONFIG = {
    logo: "/assets/proj_logo.png",
    border: "",
    color: "",
    repoIcon: "/assets/embeds/github-icon.svg",
    repoLabel: "GitHub File",
};

interface ProjectDetailProps {
    slug: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
    const project = projects_data.find(
        (p) => p.project_title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!project) {
        return (
            <div className={s.container}>
                <Link href="/archive" className={s.backLink}>Project Archive</Link>
                <h1 className={s.notFound}>Project not found</h1>
            </div>
        );
    }

    const config = SUBGROUP_CONFIG[project.subgroup] ?? DEFAULT_CONFIG;

    return (
        <div className={s.container}>
            <Link href="/archive" className={s.backLink}>Project Archive</Link>

            <div className={`${s.detail} ${config.border}`}>
                <div className={s.header}>
                    <img className={s.subgroupLogo} src={config.logo} alt={`${project.subgroup} Logo`} />
                    <div className={s.headerText}>
                        <span className={s.quarter}>{project.quarter}</span>
                        <span className={s.teamName}>{project.subgroup} {project.team_name}</span>
                    </div>
                </div>

                <div className={s.imageWrapper}>
                    <img
                        className={project.logo ? s.projectImage : s.projectImageDefault}
                        src={project.logo || config.logo}
                        alt={project.project_title}
                    />
                </div>

                <h1 className={`${s.title} ${config.color}`}>{project.project_title}</h1>

                <div className={s.meta}>
                    <p><strong>Created by:</strong> {project.members.join(", ")}</p>
                    <p><strong>Mentored by:</strong> {project.mentors.join(", ")}</p>
                    {project.technology && (
                        <p><strong>Technology:</strong> {project.technology}</p>
                    )}
                </div>

                <p className={s.description}>{project.description}</p>

                <div className={s.links}>
                    <a href={project.project_link} className={s.repoButton} target="_blank" rel="noopener noreferrer">
                        <img className={s.repoIcon} src={config.repoIcon} alt={config.repoLabel} />
                        {config.repoLabel}
                    </a>
                    {project.slides && (
                        <a href={project.slides} className={s.repoButton} target="_blank" rel="noopener noreferrer">
                            <img className={s.repoIcon} src="/assets/embeds/slides.png" alt="Slides" />
                            Slides
                        </a>
                    )}
                    {project.other_links && (
                        <a href={project.other_links} className={s.repoButton} target="_blank" rel="noopener noreferrer">
                            Additional Link
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
