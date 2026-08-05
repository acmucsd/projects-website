'use client'
import { useState } from 'react';
import s from './style.module.scss';
import ProjectCards from '../../components/project-card';

const FILTERS = [
    { label: 'Design', className: s.filterDesign },
    { label: 'Hack', className: s.filterHack },
    { label: 'AI', className: s.filterAI },
    { label: 'Robotics', className: s.filterRobotics },
];

const Archive: React.FC = () => {
    const [quarter, setQuarter] = useState<string>('All');
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    return (
        <div className={s.container} id="archive">
            <div className={s.headerRow}>
                <h1 className={s.header}>Past Projects Archive</h1>
                <select name="project_select"
                className={s.project_selector} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setQuarter(e.target.value);
                }}>
                    <option value="All">Quarter & Year</option>
                    <option value="Spring 2023">Spring 2023</option>
                    <option value="Winter 2023">Winter 2023</option>
                    <option value="Fall 2022">Fall 2022</option>
                </select>
            </div>
            <div className={s.filters}>
                {FILTERS.map(({ label, className }) => (
                    <button
                        key={label}
                        className={`${s.filterButton} ${className} ${activeFilter === label ? s.filterActive : ''}`}
                        onClick={() => setActiveFilter(activeFilter === label ? null : label)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className={s.subheadingRow}>
                <h2 className={s.subheading}>Highlighted Projects</h2>
                <span className={s.dateLabel}>2023 – 2024</span>
            </div>
            <ProjectCards quarter={quarter} highlighted={true} subgroup={activeFilter}/>
            <div className={s.subheadingRow}>
                <h2 className={s.subheading}>Other Projects</h2>
            </div>
            <ProjectCards quarter={quarter} highlighted={false} subgroup={activeFilter}/>
        </div>
    )
}

export default Archive;