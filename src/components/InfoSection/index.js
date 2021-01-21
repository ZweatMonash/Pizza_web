import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Column2,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <div>
      <InfoContainer lightBg="true">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading lightText="false">Heading</Heading>
                <Subtitle darkText="true">Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" primary="true" dark="true">
                    Button
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;
