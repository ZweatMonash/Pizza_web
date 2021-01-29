import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElement";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Explore More Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} alt="icon1"></ProjectsIcon>
          <ProjectsH2>Project 1</ProjectsH2>
          <ProjectsP>Project 1 Para</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} alt="icon2"></ProjectsIcon>
          <ProjectsH2>Project 2</ProjectsH2>
          <ProjectsP>Project 2 Para</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} alt="icon3"></ProjectsIcon>
          <ProjectsH2>Project 3</ProjectsH2>
          <ProjectsP>Project 3 Para</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
