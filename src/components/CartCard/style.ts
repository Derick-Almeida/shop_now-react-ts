import styled from "styled-components";

export const card = styled.li`
  display: flex;
  justify-content: flex-start;
  background-color: var(--white);

  min-width: 100%;
  min-height: clamp(6rem, 5vw, 7rem);
  max-height: clamp(6rem, 5vw, 7rem);

  padding: 1%;
  border-bottom: 1px solid var(--black-2);

  transition: background 0.3s, filter 0.3s;

  @media (min-width: 1024px) {
    min-height: clamp(5rem, 5vw, 7rem);
    max-height: clamp(5rem, 5vw, 7rem);
  }
`;

export const content = styled.div`
  width: 65%;
  margin-left: 3%;
  position: relative;
`;

export const img = styled.img`
  min-width: 32%;
  max-width: 32%;
  min-height: 100%;
  max-height: 100%;

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
