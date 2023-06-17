import styled from "styled-components";

export const container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 9;

  min-width: 100%;
  height: 13vh;
  max-height: 13vh;

  background-color: var(--grey-1);
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 430px) {
    height: 10vh;
    max-height: 10vh;
  }
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
