import styled from "styled-components";

export const container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const input = styled.input`
  background: var(--grey-1);
  border: none;
  border-radius: 8px;

  padding: 12px 20px;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--grey-2);
  }
`;
