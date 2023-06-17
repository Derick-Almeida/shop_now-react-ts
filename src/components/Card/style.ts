import styled from "styled-components";

export const container = styled.div`
  width: 80%;
  border-radius: 8px;
  border: 0.2rem solid var(--green-2);

  position: relative;
  margin-bottom: 2vh;

  flex: none;
  scroll-snap-align: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 5px 20px var(--black-2);
    cursor: pointer;
  }

  @media (min-width: 430px) {
    width: 32%;
    margin-bottom: 4vh;
  }
`;

export const img = styled.img`
  min-width: 100%;
  max-width: 100%;
  min-height: 50vw;
  max-height: 50vw;

  object-fit: cover;
  border-radius: 0.5rem;

  @media (min-width: 430px) {
    min-height: 20vh;
    max-height: 20vh;
  }
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

export const title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const tag = styled.span`
  font-weight: 400;
  color: var(--grey-3);
  font-size: 0.9rem;
`;

export const price = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
`;

export const button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;

  border: none;
  color: var(--green-1);
  background-color: var(--green-2);

  position: absolute;
  bottom: 10px;
  right: 10px;

  transition: background-color 0.4s, color 0.4s;

  &:active {
    background-color: var(--green-1);
    color: var(--white);
  }

  @media (min-width: 430px) {
    &:hover {
      background-color: var(--green-1);
      color: var(--white);
    }
  }
`;
