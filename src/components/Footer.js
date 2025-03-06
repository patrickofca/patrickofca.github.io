import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: ${(props) =>
    props.theme === "dark" ? "#1a1a2e" : "#2c3e50"};
  color: #ecf0f1;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #ecf0f1;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #f1c40f;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const Footer = () => {
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";

  return (
    <FooterContainer theme={currentTheme}>
      <SocialLinks>
        <SocialLink
          href="https://github.com/patrickofca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/patrickruggeri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://twitter.com/patrickruggeri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="mailto:patrick@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {new Date().getFullYear()} Patrick Ruggeri. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
