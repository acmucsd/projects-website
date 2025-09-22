"use client";

import s from "./style.module.scss";

const Description = () => {
  return (
    <div className={s.projecttypes}>
      <div className={s.projectdescription}>
        <span className={s.ai}>AI</span> projects focus on building a project
        related to all things AI, from natural language processing to computer
        vision and more!{" "}
      </div>
      <div className={s.projectdescription}>
        <span className={s.hack}>Hack</span> projects works to build a full MERN
        stack website, emulating a software engineering team working on the
        Agile process!
      </div>

      <div className={s.projectdescription}>
        <span className={s.design}>Design</span> projects work on creating or
        redesigning a platform, working through the design process from research
        to prototyping and more!
      </div>
    </div>
  );
};

export default Description;
