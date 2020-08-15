import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
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
import { SKILLS } from "./data";
import { META } from "../../constant";

function Main() {
  const history = useHistory();

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
      <Helmet>
        <meta name="description" content={META.description} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.image} />
        <meta property="og:url" content={META.url} />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.image} />
        <meta name="twitter:card" content={META.card} />
      </Helmet>
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
      <Skills>
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
      <Contact>
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
      <Works>
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
      <Feedback>
        <Text>Have one or some feedbacks for this page ?</Text>
        <SendButton onClick={handleSendClick}>Send</SendButton>
      </Feedback>
    </>
  );
}

export default Main;
