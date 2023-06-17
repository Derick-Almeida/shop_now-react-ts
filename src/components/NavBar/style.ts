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
    gap: 0;
    position: sticky;
    padding: 6vh 8% 5vh 8%;
  }
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 0.9vw, 3.5rem);

  overflow-x: auto;
  padding: 0 4% 2vh 4%;

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
    padding: 0;
  }
`;

export const li = styled.li``;
