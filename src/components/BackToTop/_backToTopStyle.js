import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 40px;
  height: 50px;
  z-index: 1000;
  background-image: linear-gradient(to top, #46cf86, #ecbb79);
  box-shadow: 0.1px 0.1px 2.3px 0.1px grey;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
