import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  ImageBg,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  HeroContent,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElement";
import { Button } from "../ButtonElement";

//Get videos from pexels website
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        {/* <ImageBg src={HeroImg} alt="heroimage" /> */}
        <HeroBg>
          <HeroContent>
            <HeroH1>Electrical and Computer Systems Graduate</HeroH1>
            <HeroP>Software/Autonomous Engineer at Monash Nova Rover</HeroP>
            <form method="get" action="../../documents/projects/Davids-CV.pdf">
              <HeroBtnWrapper>
                <Button
                  to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                >
                  Download Resume {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </form>
          </HeroContent>
        </HeroBg>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
