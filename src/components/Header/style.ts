import styled from "styled-components";

export const header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: clamp(6rem, 7.55vw, 26rem);
  user-select: none;

  position: relative;
  z-index: 1001;

  box-shadow: 0 0 clamp(1.5rem, 1.5vw, 20rem) var(--black-2);
  overflow: hidden;
`;

export const img = styled.img`
  height: clamp(4.5rem, 6vw, 20rem);
  object-fit: contain;
`;
