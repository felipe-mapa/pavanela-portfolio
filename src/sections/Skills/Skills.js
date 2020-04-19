import React from "react";

import { skillsDB } from "../../database/skillsDB";

const Skills = () => {
  const listSkills = skillsDB.skills;
  const catSkills = skillsDB.skills.map((s) => s.category)
  const uniqueCats = [...new Set(catSkills)]

  return (
    <section className="Skills find-section">
      <h1 className="heading-primary heading-primary--2" id="header-3">
        Skillset
      </h1>
      {uniqueCats.map(c => (
        <div className="Skills__category" key={c}>
        <h2 className="Skills__category--title">{c}: </h2>
        <div className="Skills__category--container">
          {listSkills.map(
            (s, index) =>
            s.category === c && (
                <div className="Skills__box" key={index}>
                  <img src={s.img} alt={s.title} className="Skills__img" />
                  <p className="Skills__title">{s.title}</p>
                </div>
              ) 
          )}
        </div>
      </div>
      ))}
    </section>
  );
};

export default Skills;
