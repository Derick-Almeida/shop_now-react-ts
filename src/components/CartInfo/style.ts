import styled from "styled-components";

export const container = styled.div`
  min-width: 100%;
  height: clamp(5rem, 5vw, 10rem);
  max-height: clamp(5rem, 5vw, 10rem);

  background-color: var(--grey-1);
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const span = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

export const p = styled.p`
  font-size: 1rem;
  font-weight: 500;

  min-width: 100%;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
