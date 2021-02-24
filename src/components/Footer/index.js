import React from "react";
import {
  FooterContainer,
  FooterH1,
  FooterWrapper,
  FooterCard,
} from "./FooterElement";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterH1>Contact</FooterH1>
        <FooterWrapper>
          <FooterCard>
            <LinkedInIcon />
          </FooterCard>
          <FooterCard>
            <EmailIcon />
          </FooterCard>
          <FooterCard>
            <TwitterIcon />
          </FooterCard>
          <FooterCard>
            <FacebookIcon />
          </FooterCard>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
