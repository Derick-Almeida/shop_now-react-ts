import styled from "styled-components";

export const nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vh;

  position: relative;
  top: 0;
  z-index: 999;

  padding: 6vh 0 5vh 0;
  background: var(--white);

  @media (min-width: 430px) {
    position: sticky;
    padding: 6vh 8% 5vh 8%;
  }
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 0.9vw, 3.5rem);

  overflow-x: auto;
  padding: 0 4%;

  @media (min-width: 430px) {
    padding: 0;
  }
`;

export const li = styled.li``;
