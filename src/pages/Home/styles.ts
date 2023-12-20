import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  gap: 3.5rem;
  margin: 94px 0 66px 0;
`;

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme.color["base-title"]};
    font-family: Baloo 2;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 62.4px */
  }

  p {
    color: ${(props) => props.theme.color["base-subtitle"]};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`;

export const HeaderImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderSubtitles = styled.div`
  background-color: red;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 100%;
    width: 16px;
    height: 16px;
  }
`;
