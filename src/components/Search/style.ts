import styled from "styled-components";

export const container = styled.form`
  display: flex;
  gap: clamp(0.5rem, 0.5vw, 2rem);
`;

export const div = styled.div`
  position: relative;
`;

export const input = styled.input`
  background: var(--grey-1);
  border: none;
  border-radius: clamp(0.55rem, 0.7vw, 2rem);

  padding: clamp(0.75rem, 0.8vw, 3rem) clamp(1.25rem, 0.9vw, 4rem);
  width: 100%;

  font-weight: 400;
  font-size: clamp(1rem, 1vw, 5rem);

  &::placeholder {
    color: var(--grey-2);
  }

  &:focus ~ div,
  &:not(:focus) ~ div:active {
    display: block;
  }

  &:not(:focus) ~ div {
    display: none;
  }
`;
