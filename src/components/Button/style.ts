import styled, { css } from "styled-components";
import { IButtonProps } from "./types";

export const button = styled.button<IButtonProps>`
  background: var(--green-2);
  color: var(--green-1);
  border: 0.1rem solid var(--green-2);
  border-radius: clamp(0.5rem, 0.6vw, 1rem);

  font-weight: 500;
  font-size: clamp(1rem, 1vw, 2rem);
  padding: clamp(0.8rem, 1vw, 2rem) clamp(1.2rem, 1vw, 2rem);
  white-space: nowrap;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: background 0.5s, color 0.5s, border-color 0.6s, filter 0.6s;

  &:active {
    cursor: pointer;
    background: var(--green-1);
    color: var(--white);
    border-color: var(--green-1);
  }

  ${({ variant }) => {
    switch (variant) {
      case "active":
        return css`
          background: var(--green-1);
          color: var(--white);
          border: 0.1rem solid var(--green-1);

          &:active {
            filter: brightness(0.7);
          }
        `;
    }
  }}

  @media (min-width: 1024px) {
    ${({ variant }) => {
      switch (variant) {
        case "active":
          return css`
            &:hover {
              filter: brightness(0.7);
            }
          `;
        default:
          return css`
            &:hover {
              cursor: pointer;
              background: var(--green-1);
              color: var(--white);
              border-color: var(--green-1);
            }
          `;
      }
    }}
  }
`;
