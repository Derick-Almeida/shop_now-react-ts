import styled from "styled-components";

export const cart = styled.aside`
  background-color: var(--green-2);
  border-radius: 1rem;
  overflow: hidden;

  max-height: 65vh;
  min-width: 28%;
  max-width: 28%;

  position: sticky;
  top: 18vh;
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
  padding-top: 1.5vh;
  overflow: hidden auto;
  min-height: 72%;
  max-height: 72%;
`;

export const cartInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 9;

  min-width: 100%;
  height: 10vh;
  max-height: 10vh;

  background-color: var(--grey-1);
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const p = styled.p`
  font-size: 1rem;
  font-weight: 500;

  min-width: 100%;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
