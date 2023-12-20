import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 40rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;
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
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme.color["base-card"]};

  form {
    display: flex;
    flex-direction: column;
  }
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
  background: ${(props) => props.theme.color["base-card"]};
  margin-top: 32px;
  display: grid;
  grid-template-columns: 200px 276px 1fr;
  gap: 1.3rem;

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

export const Product = styled.div`
  background: ${(props) => props.theme.color["base-card"]};
  padding: 2.5rem;
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

export const SelectedCoffesContainer = styled.div`
  background: ${(props) => props.theme.color["base-card"]};
`;

export const PaymentContainer = styled.div``;
