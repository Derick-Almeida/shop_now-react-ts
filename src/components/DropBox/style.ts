import styled from "styled-components";

export const container = styled.div`
  min-width: 100%;
  max-width: 100%;
  overflow: hidden;

  border-radius: 8px;
  box-shadow: 2px 2px 10px 5px var(--black-2);
  background: var(--white);

  position: absolute;
  left: 0;
  top: 110%;
  z-index: 9;
`;

export const ul = styled.ul`
  min-height: 10vh;
  max-height: 60vh;
  overflow: hidden auto;
`;

export const message = styled.div`
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;
