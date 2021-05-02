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
      <FooterContainer id="contact">
        <FooterH1>Contact</FooterH1>
        <FooterWrapper>
          <FooterCard href="https://www.linkedin.com/in/zwehtet/">
            <LinkedInIcon />
          </FooterCard>
          <FooterCard href="mailto: zwe.david.htet@gmail.com">
            <EmailIcon />
          </FooterCard>
          <FooterCard href="https://twitter.com/zwe229679">
            <TwitterIcon />
          </FooterCard>
          <FooterCard href="https://www.facebook.com/zwe.linhtet.1/">
            <FacebookIcon />
          </FooterCard>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
