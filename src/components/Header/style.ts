import styled from "styled-components";

export const header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 13vh;
  max-height: 13vh;

  box-shadow: 0 0 clamp(1.5rem, 1.5vw, 20rem) var(--black-2);
  overflow: hidden;
`;

export const img = styled.img`
  height: clamp(4.5rem, 5.8vw, 20rem);
  object-fit: contain;
`;
