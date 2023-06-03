import styled, { css } from "styled-components";
import { IButtonProps } from "./types";

export const button = styled.button<IButtonProps>`
  background: var(--green-2);
  color: var(--green-1);
  border: 1.5px solid var(--green-2);
  border-radius: 8px;

  font-weight: 500;
  font-size: 1rem;
  padding: 0.8rem 1.2rem;

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
          border: 1.5px solid var(--green-1);

          &:hover {
            filter: brightness(0.7);
          }
        `;
    }
  }}
`;
