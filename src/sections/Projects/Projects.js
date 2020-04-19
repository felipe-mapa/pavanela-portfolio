import React, { useState } from "react";
import Tooltip from "react-simple-tooltip";

import gitHubImg from "../../assets/logos/devOps/github.png";
import linkImg from "../../assets/logos/link.png";

import { projectsDB } from "../../database/projectsDB";
import { skillsDB } from "../../database/skillsDB";
import ProjectsType from "./ProjectsType/ProjectsType";

const Projects = () => {
  const [typeSelected, setTypeSelected] = useState("Website");
  const [descSelected, setDescSelected] = useState("");

  const listProjects = projectsDB.projects.map((p, index) => {
    const maxLength = 110;
    let description =
      p.description.length < maxLength || p.title === descSelected
        ? p.description
        : p.description.substring(0, maxLength) + "...";

    if (p.type.includes(typeSelected)) {
      return (
        <div key={index} className="Projects__grid">
          <img className="Projects__img" alt={p.title} src={p.image} />
          <div className="Projects__box">
            <div className="Projects__box--header">
              <h3 className="Projects__box--title">{p.title}</h3>
              <div>
                {p.gitHub !== null && (
                  <Tooltip
                    content="Go to GitHub"
                    placement="bottom"
                    padding={8}
                    radius={5}
                    style={{ height: "40px", marginRight: "10px" }}
                  >
                    <a
                      href={p.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gitHubImg} alt="gitHubLogo" />
                    </a>
                  </Tooltip>
                )}
                <Tooltip
                  content={p.option}
                  placement="bottom"
                  padding={8}
                  radius={5}
                  style={{ height: "40px" }}
                >
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <img src={linkImg} alt="linkIcon" />
                  </a>
                </Tooltip>
              </div>
            </div>
            <div>
              {p.skills.map((s1) =>
                skillsDB.skills.map(
                  (s2) =>
                    s1 === s2.title && (
                      <Tooltip
                        key={s2.title}
                        content={s2.title}
                        padding={8}
                        radius={5}
                      >
                        <img
                          src={s2.img}
                          alt={s2.title}
                          className="Projects__box--img"
                        />
                      </Tooltip>
                    )
                )
              )}
            </div>
            <p>{description}</p>
            {p.description.length > maxLength && (
              <button className="Projects__box--button"
                onClick={() =>
                  p.title !== descSelected
                    ? setDescSelected(p.title)
                    : setDescSelected("")
                }
              >
                {p.title !== descSelected ? "Read more" : "Hide"}
              </button>
            )}
          </div>
        </div>
      );
    } else return null;
  });

  return (
    <section className="find-section">
      >
      <h1 className="heading-primary heading-primary--1" id="header-4">
        Projects
      </h1>
      <ProjectsType
        changeType={(c) => setTypeSelected(c)}
        selected={typeSelected}
      />
      <div className="Projects__container">{listProjects}</div>
    </section>
  );
};

export default Projects;
