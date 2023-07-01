import styled from "styled-components";

export const card = styled.li`
  display: flex;
  justify-content: flex-start;

  min-width: 100%;
  min-height: clamp(5rem, 5vw, 10rem);
  max-height: clamp(5rem, 5vw, 10rem);

  padding: 1%;
  border-bottom: 1px solid var(--black-2);

  transition: background 0.3s, filter 0.3s;
`;

export const content = styled.div`
  width: 65%;
  margin-left: 3%;
  position: relative;
`;

export const img = styled.img`
  min-width: 32%;
  max-width: 32%;
  min-height: clamp(4rem, 5vw, 10rem);
  max-height: clamp(5rem, 5vw, 10rem);

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
