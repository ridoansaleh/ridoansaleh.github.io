import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Label = styled.span`
  line-height: 34px;
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    margin-right: 20px;
  }
`;

export const Select = styled.select`
  height: 34px;
  width: 100%;
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    width: 255px;
  }
`;

const Section = styled.section`
  box-shadow: 0.1px 0.1px 2.3px 0.1px grey;
  padding: 10px;
`;

export const List = styled(Section)`
  padding: 20px;
`;

export const ListTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  opacity: 0.7;
  margin-bottom: 20px;
`;

export const ListItem = styled.div`
  font-size: 14px;
  margin-bottom: 50px;

  > img {
    margin-bottom: 30px;
  }
  > div:nth-child(5) {
    margin-bottom: 20px;
  }
`;

export const ProjectName = styled.div`
  font-size: 17px;
  font-weight: bold;
  opacity: 0.7;
  margin-bottom: 10px;
`;

export const Text = styled.div``;

export const Link = styled.a``;
