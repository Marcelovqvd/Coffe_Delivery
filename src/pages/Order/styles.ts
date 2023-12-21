import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.p`
  margin-bottom: 15px;
  color: ${(props) => props.theme.color["base-subtitle"]};
  font-family: ${(props) => props.theme.fontSizes.baloo2.Title_XS};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const OrderForm = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.color["base-card"]};
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const FormTittle = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.color["base-subtitle"]};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme.color["base-text"]};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`;

export const InputsForm = styled.div`
  margin-top: 32px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 200px 276px 1fr;
  grid-template-rows: auto auto auto auto;

  input {
    padding: 12px;
    border-radius: 4px;
    background: ${(props) => props.theme.color["base-input"]};
    border: 1px solid ${(props) => props.theme.color["base-button"]};
  }

  ::placeholder {
    color: ${(props) => props.theme.color["base-label"]};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`;

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color["base-card"]};
  padding: 2.5rem;
`;

export const ButtonsForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme.color["base-button"]};
    color: ${(props) => props.theme.color["base-text"]};

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

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
