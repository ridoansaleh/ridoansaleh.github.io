import React, { useState, useEffect, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Profile,
  Avatar,
  Name,
  Title,
  Description,
  Socials,
  IconWrapper,
  Label,
  Icon,
  Contact,
  Text,
  ButtonGroup,
  EmailButton,
  WhatsAppButton,
  Skills,
  SkillsTitle,
  BoxSkill,
  Load,
  Works,
  WorksTitle,
  ProjectButton,
  Feedback,
  SendButton,
} from "./_mainStyle";
import profileImg from "./assets/profile.png";
import linkedInIcon from "./assets/linkedin.png";
import twitterIcon from "./assets/twitter.png";
import mediumIcon from "./assets/medium.png";
import useScrollup from "../../hooks/useScrollup";
import { SKILLS } from "./data";
import { getElDistanceToTop } from "../../utils";

function Main() {
  const history = useHistory();
  const [skillsDistance, setSkillsDistance] = useState(0);
  const [contactDistance, setContactDistance] = useState(0);
  const [projectsDistance, setProjectsDistance] = useState(0);
  const [feedbackDistance, setFeedbackDistance] = useState(0);
  const [isSkillsPassed, setSkillsPassed] = useState(false);
  const [isContactPassed, setContactPassed] = useState(false);
  const [isProjectsPassed, setProjectsPassed] = useState(false);
  const [isFeedbackPassed, setFeedbackPassed] = useState(false);
  const { setScroll } = useScrollup();

  useEffect(() => {
    setScroll(true);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY > skillsDistance) {
      setSkillsPassed(true);
    }
    if (window.innerHeight + window.scrollY > contactDistance) {
      setContactPassed(true);
    }
    if (window.innerHeight + window.scrollY > projectsDistance) {
      setProjectsPassed(true);
    }
    if (window.innerHeight + window.scrollY > feedbackDistance) {
      setFeedbackPassed(true);
    }
  };

  useLayoutEffect(() => {
    setSkillsDistance(getElDistanceToTop("skills"));
    setContactDistance(getElDistanceToTop("contact"));
    setProjectsDistance(getElDistanceToTop("projects"));
    setFeedbackDistance(getElDistanceToTop("feedback"));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contactDistance]);

  const handleSeeProjectsClick = () => {
    history.push("/projects");
  };

  const handleLinkedInClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/ridoan-saleh-n-32897385/";
  };

  const handleTwitterClick = () => {
    window.location.href = "https://twitter.com/Rido67720624";
  };

  const handleMediumClick = () => {
    window.location.href = "https://medium.com/@ridoansalehnst";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ridoansalehnasution98@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/+6287821797592";
  };

  const handleSendClick = () => {
    window.location.href =
      "mailto:ridoansalehnasution98@gmail.com?subject=Feedback";
  };

  return (
    <>
      <Profile>
        <Avatar src={profileImg} />
        <Name>Ridoan Saleh Nasution</Name>
        <Title>( Software Engineer )</Title>
        <Description>
          He is a software engineer that has 3+ years of experience building
          small to large modern web applications for reputable companies. His
          passion towards his works make him always keep up to the latest
          technologies in the community.
        </Description>
        <Socials>
          <IconWrapper onClick={handleLinkedInClick}>
            <Icon src={linkedInIcon} />
            <Label>LinkedIn</Label>
          </IconWrapper>
          <IconWrapper onClick={handleTwitterClick}>
            <Icon src={twitterIcon} />
            <Label>Twitter</Label>
          </IconWrapper>
          <IconWrapper onClick={handleMediumClick}>
            <Icon src={mediumIcon} />
            <Label>Medium</Label>
          </IconWrapper>
        </Socials>
      </Profile>
      <Skills id="skills" isPassed={isSkillsPassed}>
        <SkillsTitle>Skills</SkillsTitle>
        <Text>
          These are the skills that he has acquired along of his journey as a
          Software Engineer.
        </Text>
        {SKILLS.map((skill) => (
          <BoxSkill key={skill.id}>
            <Load level={skill.expertise_level}>{skill.name}</Load>
          </BoxSkill>
        ))}
      </Skills>
      <Contact id="contact" isPassed={isContactPassed}>
        <Text>
          Currently, he is working on a company as a Fullstack JavaScript
          Developer. But, outside of his working hours and at the weekend he
          would love to provides a service to create website for your personal
          or company needs. He always open for other opportunity as well.
        </Text>
        <Text>Lets discuss more there!</Text>
        <ButtonGroup>
          <EmailButton onClick={handleEmailClick}>Email</EmailButton>
          <WhatsAppButton onClick={handleWhatsAppClick}>
            WhatsApp
          </WhatsAppButton>
        </ButtonGroup>
      </Contact>
      <Works id="projects" isPassed={isProjectsPassed}>
        <WorksTitle>Projects</WorksTitle>
        <Text>
          This is a list of several projects that he has been working on. Some
          of them are done.
        </Text>
        <Text>
          All of them are his side project that he built while he was learning
          and deepen his knowledge on it. He prefers not to include projects
          that he had work from his current or previous companies.
        </Text>
        <ProjectButton onClick={handleSeeProjectsClick}>
          See Projects
        </ProjectButton>
      </Works>
      <Feedback id="feedback" isPassed={isFeedbackPassed}>
        <Text>Have one or some feedbacks for this page ?</Text>
        <SendButton onClick={handleSendClick}>Send</SendButton>
      </Feedback>
    </>
  );
}

export default Main;
