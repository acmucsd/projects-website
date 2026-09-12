import s from './style.module.scss';
import Image from 'next/image';

const skills_data = [
    {
        "subteam": "Hack",
        "title": "Hack Projects",
        "description": "No experience is necessary. Hack projects typically use MongoDB, Express, React, and Node.js.",
        "image": "/assets/embeds/react-icon.svg",
        "color": s.colorHack,
        "border": s.borderHack,
    },
    {
        "subteam": "Robotics",
        "title": "Robotics Projects",
        "description": "No experience is necessary. Robotics projects typically use Arduino.",
        "image": "/assets/embeds/arduino-icon.svg",
        "color": s.colorRobotics,
        "border": s.borderRobotics,
    },
    {
        "subteam": "Design",
        "title": "Design Projects",
        "description": "No experience is necessary. Design projects typically use Figma, FigJam, and Google Slides.",
        "image": "/assets/embeds/figma-icon.svg",
        "color": s.colorDesign,
        "border": s.borderDesign,
    },
    {
        "subteam": "AI",
        "title": "AI Projects",
        "description": "No experience is necessary. AI projects typically use Github, CoLab, and Google Slides.",
        "image": "/assets/embeds/colab-icon.svg",
        "color": s.colorHack,
        "border": s.borderHack,
    }
]

const SkillCards = () => {
  return (
    <div className={s.container}>
      {skills_data.map((skill, index) => (
        <div className={`${s.card} ${skill.border}`} key={index}>
          <div className={`${s.subteam} ${skill.color}`}>
            ACM {skill.subteam}
          </div>
          <div className={s.title}>
            <h2>
              {skill.title}
            </h2>
          </div>
          <div className={s.description}>
            {skill.description}
          </div>
          <div>
            <Image
              alt=""
              src={skill.image}
              width={250}
              height={250}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;