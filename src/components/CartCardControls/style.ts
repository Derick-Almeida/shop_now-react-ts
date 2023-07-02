import styled from "styled-components";

export const controlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  min-width: 50%;
  max-width: 50%;
  min-height: 5vh;
  max-height: 5vh;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  border-radius: 0.5rem;
`;

export const controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  min-width: 100%;
`;

export const button = styled.button`
  border: none;
  background: none;

  font-size: 1.5rem;
  font-weight: 500;
  color: var(--grey-3);

  padding: 0 10%;
  border-radius: 50%;

  transition: color 0.4s, text-shadow 0.4s;

  &:active {
    color: var(--green-1);
    text-shadow: 0.05rem 0.05rem 0.1rem var(--green-1);
  }

  &:nth-child(1):active {
    color: var(--red);
    text-shadow: 0.05rem 0.05rem 0.1rem var(--red);
  }

  @media (min-width: 1024px) {
    &:hover {
      color: var(--green-1);
      text-shadow: 0.05rem 0.05rem 0.1rem var(--green-1);
    }
    &:nth-child(1):hover {
      color: var(--red);
      text-shadow: 0.05rem 0.05rem 0.1rem var(--red);
    }
  }
`;

export const exclude = styled.button`
  border: none;
  background: none;
  margin-top: -1vh;

  font-size: 1rem;
  font-weight: 400;
  color: var(--black-1);

  transition: color 0.4s, text-shadow 0.4s;

  &:active {
    color: var(--red);
    text-shadow: 0.05rem 0.05rem 0.1rem var(--red);
  }

  @media (min-width: 1024px) {
    &:hover {
      color: var(--red);
      text-shadow: 0.05rem 0.05rem 0.1rem var(--red);
    }
  }
`;

export const span = styled.span`
  color: var(--grey-2);
  font-size: 1.2rem;
  font-weight: bold;
`;
