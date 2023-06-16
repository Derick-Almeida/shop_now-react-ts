import styled from "styled-components";

export const main = styled.main`
  @media (min-width: 430px) {
    min-width: 70%;
    max-width: 70%;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 1vw;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  @media (min-width: 430px) {
    flex-wrap: wrap;
  }
`;
