import styles from './style.module.scss';
import SkillCards from '@/src/components/skill-card';

const SkillsGained = () => {
  return (
    <section className={styles.container} id="skills-gained">
      <h2 className={styles.heading}>Skills & Technologies Gained</h2>
      <SkillCards />
    </section>
  );
};

export default SkillsGained;
