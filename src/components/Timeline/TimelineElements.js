import styled from "styled-components";

export const TimelineContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  /* background: #fff; */
`;

export const TimelineH1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
