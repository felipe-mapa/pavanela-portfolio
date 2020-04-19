import React from "react";

import webImage from "../../../assets/img/web.jpg";
import mobImage from "../../../assets/img/mob.png";

import ProjectsBox from "../ProjectsBox/ProjectsBox";

const ProjectsType = (props) => {
  return (
    <div className="ProjectsType__container">
      <ProjectsBox
        type="Websites"
        selected={props.selected === "Website"}
        clicked={props.changeType.bind(this, "Website")}
      >
        <img src={webImage} alt="" className="ProjectsType__image" />
      </ProjectsBox>
      <ProjectsBox
        type="Mobile Apps"
        selected={props.selected === "Mobile"}
        clicked={props.changeType.bind(this, "Mobile")}
      >
        <img src={mobImage} alt="" className="ProjectsType__image" />
      </ProjectsBox>
    </div>
  );
};

export default ProjectsType;
