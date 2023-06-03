import styled from "styled-components";

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 20px var(--black-2);
  border-radius: 8px;
  padding: 12px 20px;

  margin-top: 6vh;
`;

export const text = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-weight: 400;
  font-size: 1rem;

  > svg {
    fill: var(--green-1);
    font-size: 1.5rem;
  }
`;

export const total = styled.span`
  background: var(--black-1);
  color: var(--white);
  border-radius: 4px;
  padding: 5px 8px;

  font-weight: 500;
  font-size: 1rem;
`;
