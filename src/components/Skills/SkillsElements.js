import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 50px 10px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 150px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    background: #ff4;
  }
`;

export const SkillsIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-widht: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
