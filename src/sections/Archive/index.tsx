import s from './style.module.scss';
import ProjectCards from '../../components/project-card';

const Archive: React.FC = () => {
    return (
        <div className={s.container}>
            <h1 className={s.header}>Project Archives</h1>
            <ProjectCards/>
        </div>
    )
}

export default Archive;