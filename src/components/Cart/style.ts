import styled from "styled-components";

export const cart = styled.aside`
  background-color: var(--green-2);
  border-radius: 1rem;
  overflow: hidden;

  max-height: 65vh;
  min-width: 28%;
  max-width: 28%;

  position: sticky;
  top: 17vh;
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
  gap: 2rem;

  min-height: 30vh;
  max-height: 45vh;
  text-align: center;

  > svg {
    font-size: 4rem;
  }
`;

export const span = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

export const ul = styled.ul`
  padding: 2vh 0px 8vh 0;
  overflow: hidden auto;
  max-height: 100%;
`;
