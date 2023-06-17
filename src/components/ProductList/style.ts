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

  padding: 0 4%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 1.5vh;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--black-2);
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-button {
    background: none;
    width: 2%;
  }

  @media (min-width: 430px) {
    flex-wrap: wrap;
    padding: 0;
  }
`;
