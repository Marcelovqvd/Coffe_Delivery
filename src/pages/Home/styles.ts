import styled from "styled-components";

export const Container = styled.div``;

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

export const MenuCoffesContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: grid;
    grid-template-columns: auto auto;
  }

  p {
    margin-bottom: 34px;
    color: ${(props) => props.theme.color["base-subtitle"]};
    font-family: Baloo 2;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
  }
`;

export const Coffe = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color["base-card"]};

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
    background: none;
  }

  main {
    display: grid;
    grid-template-columns: auto auto;

    p {
      color: ${(props) => props.theme.color["base-subtitle"]};
      text-align: center;
      font-family: Baloo 2;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 26px */
    }

    span {
      color: ${(props) => props.theme.color["base-label"]};
      text-align: center;
      /* Text/Regular S */
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    img {
      width: 22px;
      height: 22px;
    }
  }
`;
