import styled from "styled-components";

export const nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2vh;

  position: relative;
  top: 0;
  z-index: 999;

  padding: 6vh 0 5vh 0;
  background: var(--white);

  @media (min-width: 430px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    padding: 5vh;
  }

  @media (min-width: 1024px) {
    flex-flow: row nowrap;
    align-items: flex-start;
    position: sticky;
    padding: 8vh 8% 5vh 8%;
  }
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 0.9vw, 3.5rem);

  overflow-x: auto;
  padding: 0 4% 0 4%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 430px) {
    padding: 0;
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
      display: block;
      height: 1rem;
      background-color: var(--grey-1);
      border: 0.2rem solid white;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--black-2);
      border-radius: 0.4rem;
      border: 0.2rem solid white;
    }
  }
`;

export const li = styled.li``;
