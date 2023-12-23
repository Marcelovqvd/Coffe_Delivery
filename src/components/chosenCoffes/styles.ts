import styled from "styled-components";

export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SelectedCoffesContainer = styled.div`
  background: ${(props) => props.theme.color["base-card"]};
  padding: 40px;
  border-radius: 6px 44px;
`;

export const CoffeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const CoffeTittle = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.color["base-subtitle"]};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const PaymentContainer = styled.div`
  span {
    margin-right: 19px;
    color: ${(props) => props.theme.color["base-text"]};
    text-align: right;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }

  strong {
    color: ${(props) => props.theme.color["base-subtitle"]};
    text-align: right;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
  }

  button {
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    background: ${(props) => props.theme.color["yellow-product"]};
    color: ${(props) => props.theme.color.white};
    border: none;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
    text-transform: uppercase;
  }
`;

export const PaymentContainerButton = styled.button`
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme.color["yellow-product"]};
  color: ${(props) => props.theme.color.white};
  border: none;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  text-transform: uppercase;
`;
