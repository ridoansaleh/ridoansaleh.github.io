import styled from "styled-components";

const Section = styled.section`
  box-shadow: 0.1px 0.1px 2.3px 0.1px grey;
  padding: 10px;

  @media only screen and (min-width: 1024px) {
    padding: 20px;
  }
`;

export const Profile = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #d97f7f;
  margin-bottom: 20px;
`;

export const Name = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`;

export const Title = styled.div`
  margin-top: 5px;
`;

export const Description = styled.div`
  margin: 30px 0;
  text-align: center;
  line-height: 23px;
`;

export const Socials = styled.div`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    > div {
      padding-right: 15px;
    }
    > div:nth-child(1) {
      margin-right: 10px;
    }
    > div:nth-child(2) {
      margin-right: 10px;
    }
  }
`;

export const IconWrapper = styled.div`
  border: 1px solid #abb2b9;
  margin-bottom: 5px;
  padding: 2px 4px;
  box-sizing: border-box;
  height: 38px;
  display: flex;
  cursor: pointer;
`;

export const Icon = styled.img``;

export const Label = styled.div`
  line-height: 32px;
  margin-left: 10px;
  font-weight: bold;
  opacity: 0.7;
`;

export const Contact = styled(Section)`
  margin-top: 23px;

  > div {
    margin-top: 50px;
  }
`;

export const Text = styled.p`
  line-height: 23px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;

    > button {
      width: 49%;
    }
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  border: 0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const EmailButton = styled(Button)`
  width: 100%;
  background-color: #fff;
  border: 1px solid #abb2b9;
  color: #57595a;
  margin-bottom: 5px;

  &:hover {
    background-color: #f16950;
    border: 1px solid #f16950;
    color: #fff;
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const WhatsAppButton = styled(Button)`
  width: 100%;
  background-color: #fff;
  border: 1px solid #abb2b9;
  color: #57595a;

  &:hover {
    background-color: #46cf86;
    border: 1px solid #46cf86;
    color: #fff;
  }
`;

export const Skills = styled(Section)`
  margin-top: 23px;
`;

export const SkillsTitle = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const BoxSkill = styled.div`
  border: 1px solid #57595a;
  height: 20px;
  margin-bottom: 20px;

  &:hover {
    border-color: #f16950;

    > div {
      background-image: linear-gradient(to right, #f16950, #ecbb79);
    }
  }
`;

export const Load = styled.div`
  background-image: linear-gradient(to right, #57595a, #acb5b0);
  width: ${({ level }) => 10 * level + "%"};
  height: 100%;
  color: #fff;
  font-size: 13px;
  line-height: 20px;
  padding-left: 4px;
`;

export const Works = styled(Section)`
  margin-top: 23px;

  > button {
    margin-top: 30px;
  }

  @media only screen and (min-width: 1024px) {
    > button {
      width: 39%;
      margin-left: 61%;
    }
  }
`;

export const WorksTitle = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ProjectButton = styled(Button)`
  text-transform: uppercase;
  width: 100%;
  background-color: #fff;
  border: 1px solid #abb2b9;
  color: #57595a;

  &:hover {
    background-color: #0a0a0a;
    border: 1px solid #0a0a0a;
    color: #fff;
  }
`;

export const Feedback = styled.section`
  margin-top: 23px;
  padding: 40px 0 10px;
  display: flex;
  flex-direction: column;

  > p {
    text-align: center;
  }
  > button {
    margin-top: 30px;
  }

  @media only screen and (min-width: 1024px) {
    > button {
      width: 39%;
      margin-left: 30.5%;
    }
  }
`;

export const SendButton = styled(Button)`
  text-transform: uppercase;
  width: 100%;
  background-color: #46cf86;

  &:hover {
    background-color: #fff;
    border: 1.5px solid #46cf86;
    color: #57595a;
  }
`;
