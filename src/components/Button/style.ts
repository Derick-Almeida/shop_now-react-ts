import styled, { css } from "styled-components";
import { IButtonProps } from "./types";

export const button = styled.button<IButtonProps>`
  background: var(--green-2);
  color: var(--green-1);
  border: clamp(0.1rem, 0.1vw, 0.2rem) solid var(--green-2);
  border-radius: clamp(0.5rem, 0.6vw, 2rem);

  font-weight: 500;
  font-size: clamp(1rem, 1vw, 5rem);
  padding: clamp(0.8rem, 1vw, 4rem) clamp(1.2rem, 1vw, 4rem);
  white-space: nowrap;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: background 0.5s, color 0.5s, border-color 0.6s, filter 0.6s;

  &:hover {
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
          border: clamp(0.1rem, 0.1vw, 0.2rem) solid var(--green-1);

          &:hover {
            filter: brightness(0.7);
          }
        `;
    }
  }}
`;
