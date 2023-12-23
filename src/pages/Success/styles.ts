import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 70rem;
  display: flex;
  align-items: center;
  gap: 102px;
  margin-top: 80px;

  header {
    p {
      color: ${(props) => props.theme.color["yellow-dark"]};
      font-family: Baloo 2;
      font-size: 32px;
      font-style: normal;
      font-weight: 800;
      line-height: 130%; /* 41.6px */
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    padding: 40px;
    border-radius: 6px 36px;
    border: 1px solid #dbac2c;
    display: flex;
    width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    border-radius: 6px 36px;
    border: 1px solid #dbac2c;

    p {
      color: var(--Base-Text, #574f4d);

      /* Text/Regular M */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 20.8px */
    }
  }
`;

export const SuccessImage = styled.div`
  img {
    width: 492px;
    height: 293px;
    margin-top: 100px;
  }
`;
