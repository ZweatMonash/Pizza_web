import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { ProjectsObject, ProjectImages } from "./Data";
// import LightBoxElement from "./LightBoxElement";
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
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(ProjectImages)
      : setFilteredImages(
          ProjectImages.filter((image) => image.tag === tag).map(
            (project) => project.imagePathRel
          )
        );
    console.log(filteredImages);
  }, [tag, filteredImages]);

  const handleClick = (tag) => (event) => {
    setTag(tag);
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Explore More Projects</ProjectsH1>
      <ProjectsWrapper>
        {ProjectsObject.map((projects) => (
          <ProjectsCard key={projects.key} onClick={handleClick(projects.tag)}>
            <SRLWrapper>
              <a
                href={filteredImages.length > 0 ? filteredImages[0] : undefined}
              >
                <ProjectsIcon
                  src={projects.iconPath}
                  alt="icon"
                  key={projects.key}
                ></ProjectsIcon>
              </a>
            </SRLWrapper>
            <ProjectsH2>{projects.iconLabel}</ProjectsH2>
            <ProjectsP>Project 2 Para</ProjectsP>
          </ProjectsCard>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
