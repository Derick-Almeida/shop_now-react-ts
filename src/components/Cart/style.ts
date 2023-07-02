import styled from "styled-components";

export const cart = styled.aside`
  background-color: var(--green-2);
  border-radius: 1rem;
  overflow: hidden;

  position: relative;
  margin: 0 4%;

  @media (min-width: 426px) {
    min-width: 80%;
    max-width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 700px) {
    min-width: 70%;
    max-width: 70%;
  }

  @media (min-width: 1024px) {
    height: fit-content;
    min-width: 28%;
    max-width: 28%;
    margin: 0;
  }
`;

export const h3 = styled.h3`
  background-color: var(--green-1);
  color: var(--white);
  padding: 1.2rem 1.5rem;

  display: inline-flex;
  align-items: center;
  gap: 1rem;

  min-width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const container = styled.div`
  color: var(--grey-3);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4vh;

  margin: 8vh 0;
  max-height: 45vh;
  text-align: center;

  > svg {
    font-size: 4rem;
  }
`;

export const span = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
`;

export const ul = styled.ul`
  padding: 1vh 0;
  overflow: hidden auto;

  min-height: 30rem;
  max-height: 30rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    padding-bottom: 0;
    min-height: 22rem;
    max-height: 22rem;

    &::-webkit-scrollbar {
      display: block;
      width: 1rem;
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
