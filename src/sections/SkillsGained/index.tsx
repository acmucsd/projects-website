import { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './style.module.scss';
import SkillCards from '@/src/components/skill-card';

const SkillsGained = () => {
  return (
    <section className={styles.container} id="faq">
      <h2 className={styles.heading}>Skills & Technologies Gained</h2>
      <SkillCards />
    </section>
  );
};

export default SkillsGained;
