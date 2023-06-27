import styled from "styled-components";

export const container = styled.div`
  min-width: 120%;
  overflow: hidden;

  border-radius: 8px;
  box-shadow: 2px 2px 10px 5px var(--black-2);
  background: var(--white);

  position: absolute;
  left: 0;
  top: 110%;
  z-index: 9;

  @media (min-width: 430px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const ul = styled.ul`
  min-height: 12vh;
  max-height: 60vh;
  overflow: hidden auto;

  > li:hover {
    cursor: pointer;
    background: var(--black-2);
    filter: brightness(0.8);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 430px) {
    min-height: 10vh;

    &::-webkit-scrollbar {
      display: block;
      width: 1rem;
      background-color: var(--grey-1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--black-2);
      border-radius: 0.4rem;
      border: 0.2rem solid white;
    }
  }
`;

export const message = styled.div`
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;
