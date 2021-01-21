import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
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
    <HeroContainer>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      <HeroBg>
        <HeroContent>
          <HeroH1>Best Pizza In Town</HeroH1>
          <HeroP>
            Sign up for a new account and receive $250 in pizza credit towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
