import React from "react";
import { SkillsCard, SkillsIcon, SkillsH2 } from "./SkillsElements";

const SkillsCards = ({ iconPath, iconLabel }) => {
  return (
    <SkillsCard>
      <SkillsIcon src={iconPath} alt="skill"></SkillsIcon>
      <SkillsH2>{iconLabel}</SkillsH2>
    </SkillsCard>
  );
};

export default SkillsCards;
