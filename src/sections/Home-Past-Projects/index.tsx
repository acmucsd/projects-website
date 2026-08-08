'use client'
import Link from 'next/link';
import s from './style.module.scss';
import projects_data from '../../components/project-card/projects.json';
import highlighted_ids from '../../components/project-card/highlighted.json';

const SUBGROUP_ORDER = ['Hack', 'AI', 'Design', 'Robotics'];

const SUBGROUP_CONFIG: Record<string, {
  logo: string;
  border: string;
  button: string;
  repoIcon: string;
  repoLabel: string;
}> = {
  Design: {
    logo: "/assets/design.svg",
    border: s.borderDesign,
    button: s.buttonDesign,
    repoIcon: '/assets/embeds/figma-icon.svg',
    repoLabel: 'Figma'
  },
  Hack: {
    logo: "/assets/hack.svg",
    border: s.borderHack,
    button: s.buttonHack,
    repoIcon: '/assets/embeds/github-icon.svg',
    repoLabel: 'GitHub File'
  },
  AI: {
    logo: "/assets/ai.svg",
    border: s.borderAI,
    button: s.buttonAI,
    repoIcon: '/assets/embeds/github-icon.svg',
    repoLabel: 'GitHub File'
  },
  Robotics: {
    logo: "/assets/robo.svg",
    border: s.borderRobotics,
    button: s.buttonRobotics,
    repoIcon: '/assets/embeds/github-icon.svg',
    repoLabel: 'GitHub File'
  },
};

const DEFAULT_CONFIG = {
  logo: "/assets/proj_logo.png",
  border: "",
  color: "",
  repoIcon: "/assets/embeds/github-icon.svg",
  repoLabel: "GitHub File",
};

const highlightedProjects = projects_data.filter((project) => highlighted_ids.includes(project.id));

const displayProjects = SUBGROUP_ORDER
  .map((subgroup) =>
    highlightedProjects.find((project) => project.subgroup === subgroup) ??
    projects_data.find((project) => project.subgroup === subgroup)
  )
  .filter((project): project is typeof projects_data[number] => Boolean(project));

const HomePastProjects: React.FC = () => {
  return (
    <div className={s.container} id="past-projects">
      <h1 className={s.header}>See Past Projects</h1>
      <div className={s.list}>
        {displayProjects.map((project) => {
          const config = SUBGROUP_CONFIG[project.subgroup];
          const slug = project.project_title.toLowerCase().replace(/\s+/g, '-');
          return (
            <div className={s.row} key={project.id}>
              <div className={`${s.imageWrapper} ${config.border}`}>
                <img
                  className={project.logo ? s.image : s.imageDefault}
                  src={project.logo || config.logo}
                  alt={project.project_title}
                />
              </div>
              <div className={s.details}>
                <h2 className={s.title}>{project.project_title}</h2>
                <p className={s.members}>{project.members.join(', ')}</p>
                <p className={s.description}>{project.description}</p>
                <div className={s.actions}>
                  <Link href={`/archive/${slug}`} className={`${s.exploreButton} ${config.button}`}>
                    Explore Project
                  </Link>
                  {project.project_link && (
                    <a
                      href={project.project_link}
                      className={s.repoButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className={s.repoIcon} src={config.repoIcon} alt={config.repoLabel} />
                      {config.repoLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/archive" className={s.viewMoreButton}>
        View More Projects
      </Link>
    </div>
  );
};

export default HomePastProjects;
