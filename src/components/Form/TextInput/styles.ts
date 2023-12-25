import styled from "styled-components"

import { mixins } from "../../../styles/mixins"

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};

  background-color: ${({ theme }) => theme.colors["base-input"]};

  transition: all 0.2s;

  input {
    color: ${({ theme }) => theme.colors["base-text"]};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }

    span {
      color: ${({ theme }) => theme.colors["base-label"]};
      padding-right: 12px;
      ${mixins.fonts.textS};
      font-style: italic;
    }
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`