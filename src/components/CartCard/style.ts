import styled from "styled-components";

export const card = styled.li`
  display: flex;
  justify-content: flex-start;

  min-width: 100%;
  min-height: 12vh;
  max-height: 12vh;

  padding: 1%;
  border-bottom: 1px solid var(--black-2);

  transition: background 0.3s, filter 0.3s;

  @media (min-width: 430px) {
    min-height: 10vh;
    max-height: 10vh;
  }
`;

export const content = styled.div`
  width: 100%;
  margin-left: 10px;
  position: relative;
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

export const controlsContainer = styled.div`
  position: absolute;
  bottom: 1vh;
  right: 0;

  min-width: 50%;
  max-width: 50%;
  min-height: 5vh;
  max-height: 5vh;

  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 0.5rem;

  @media (min-width: 430px) {
    bottom: 0;
  }
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

  &:hover {
    color: var(--green-1);
    text-shadow: 0.05rem 0.05rem 0.1rem var(--green-1);
  }

  &:nth-child(1):hover {
    color: var(--red);
    text-shadow: 0.05rem 0.05rem 0.1rem var(--red);
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

  &:hover {
    color: var(--red);
    text-shadow: 0.05rem 0.05rem 0.1rem var(--red);
  }
`;

export const span = styled.span`
  color: var(--grey-2);
  font-size: 1.2rem;
  font-weight: bold;
`;
