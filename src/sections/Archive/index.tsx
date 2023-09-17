'use client'
import { useState } from 'react';
import s from './style.module.scss';
import ProjectCards from '../../components/project-card';

const Archive: React.FC = () => {
    const [quarter, setQuarter] = useState<string>('Spring 2023');
    return (
        <div className={s.container}>
            <h1 className={s.header}>Past Project Archives</h1>
            <div className={s.dropdown}>
            <select name="project_select" 
            className={s.project_selector} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setQuarter(e.target.value);
            }}>
                <option value="Spring 2023">Spring 2023</option>
                <option value="Winter 2023">Winter 2023</option>
                <option value="Fall 2022">Fall 2022</option>
            </select>
            </div>
            <ProjectCards quarter={quarter}/>
        </div>
    )
}

export default Archive;