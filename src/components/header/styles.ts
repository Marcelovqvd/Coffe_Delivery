import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  background: ${(props) => props.theme.color["background"]};
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const LocationStyle = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color["purple-light"]};

  img {
    width: 1.375rem;
    height: 1.375rem;
  }

  span {
    color: ${(props) => props.theme.color["purple-dark"]};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color["yellow-light"]};
  padding: 0.5rem;
  border-radius: 6px;

  img {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.color["yellow-light"]};
  }
`;
