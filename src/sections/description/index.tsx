"use client";

import s from "./style.module.scss";

const Description = () => {
  return (
    <div className={s.projecttypes}>
      <div className={s.projectdescription}>
        <text className={s.ai}>AI</text> projects focus on building a project
        related to all things AI, from natural language processing to computer
        vision and more!{" "}
      </div>
      <div className={s.projectdescription}>
        <text className={s.hack}>Hack</text> projects works to build a full MERN
        stack website, emulating a software engineering team working on the
        Agile process!
      </div>

      <div className={s.projectdescription}>
        <text className={s.design}>Design</text> projects work on creating or
        redesigning a platform, working through the design process from research
        to prototyping and more!
      </div>
    </div>
  );
};

export default Description;
