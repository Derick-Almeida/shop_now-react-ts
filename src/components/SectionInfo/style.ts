import styled from "styled-components";

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--white);
  box-shadow: 0 0 clamp(1.25rem, 1vw, 2.5rem) var(--black-2);
  padding: clamp(0.75rem, 0.9vw, 3rem) clamp(1.25rem, 1vw, 3.5rem);
  border-radius: clamp(0.5rem, 0.6vw, 2rem);

  margin-top: 6vh;
  cursor: default;
`;

export const text = styled.p`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 0.8vw, 3rem);

  font-weight: 400;
  font-size: clamp(1rem, 1vw, 4rem);

  > svg {
    fill: var(--green-1);
    font-size: clamp(1rem, 1.8vw, 6.5rem);
  }
`;

export const total = styled.span`
  background: var(--black-1);
  color: var(--white);
  border-radius: clamp(0.3rem, 0.4vw, 2rem);
  padding: clamp(0.3rem, 0.35vw, 1.5rem) clamp(0.5rem, 0.5vw, 2rem);

  font-size: clamp(1rem, 1vw, 4rem);
  font-weight: 500;
`;
