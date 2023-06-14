import styled from "styled-components";

export const card = styled.li`
  display: flex;
  justify-content: flex-start;

  min-width: 100%;
  min-height: 10vh;
  max-height: 10vh;

  padding: 1%;
  border-bottom: 1px solid var(--black-2);
  position: relative;

  transition: background 0.3s, filter 0.3s;

  &:hover {
    cursor: pointer;
    background: var(--black-2);
    filter: brightness(0.8);
  }
`;

export const content = styled.div`
  width: 100%;
  margin-left: 10px;
`;

export const img = styled.img`
  min-width: 32%;
  max-width: 32%;

  object-fit: cover;
  border-radius: 0.5rem;
`;

export const title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const tag = styled.span`
  font-weight: 400;
  color: var(--grey-3);
  font-size: 0.9rem;
`;

export const text = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
`;

export const controls = styled.div``;
