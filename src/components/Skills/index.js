import React from "react";
import SkillsCards from "./SkillsCards";
import { SkillsContainer, SkillsH1, SkillsWrapper } from "./SkillsElements";
import { SkillsObject } from "./Data";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>My Skills</SkillsH1>
      <SkillsWrapper>
        {SkillsObject.map((skill) => (
          <SkillsCards
            iconPath={skill.iconPath}
            iconLabel={skill.iconLabel}
            key={skill.key}
          />
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
