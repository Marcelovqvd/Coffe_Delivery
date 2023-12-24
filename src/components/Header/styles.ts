import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 10px 8px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["purple-light"]};
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    color: ${({ theme }) => theme.colors["purple-dark"]};
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["base-title"]};

    padding: 8px;
    border-radius: 6px;
  }
`;
