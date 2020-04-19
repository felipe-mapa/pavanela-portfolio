import React from "react";

import { skillsDB } from "../../database/skillsDB";

const Skills = () => {
  const listSkills = skillsDB.skills;

  return (
    <section className="Skills find-section">
      <h1 className="heading-primary heading-primary--2" id="header-3">
        Skillset
      </h1>
      <div className="Skills__category">
        <h2 className="Skills__category--title">Programming Languages: </h2>
        <div className="Skills__category--container">
          {listSkills.map(
            (s, index) =>
              s.category === "programming_language" && (
                <div className="Skills__box" key={index}>
                  <img src={s.img} alt={s.title} className="Skills__img" />
                  <p className="Skills__title">{s.title}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="Skills__category">
        <h2 className="Skills__category--title">Frameworks: </h2>
        <div className="Skills__category--container">
          {listSkills.map(
            (s, index) =>
              s.category === "framework" && (
                <div className="Skills__box" key={index}>
                  <img src={s.img} alt={s.title} className="Skills__img" />
                  <p className="Skills__title">{s.title}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="Skills__category">
        <h2 className="Skills__category--title">Libraries: </h2>
        <div className="Skills__category--container">
          {listSkills.map(
            (s, index) =>
              s.category === "library" && (
                <div className="Skills__box" key={index}>
                  <img src={s.img} alt={s.title} className="Skills__img" />
                  <p className="Skills__title">{s.title}</p>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
