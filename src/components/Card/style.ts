import styled from "styled-components";

export const container = styled.div`
  width: 32%;
  border-radius: 8px;
  border: 0.2rem solid var(--green-2);

  position: relative;
  margin-bottom: 30px;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 5px 20px var(--black-2);
    cursor: pointer;
  }
`;

export const img = styled.img`
  min-width: 100%;
  max-width: 100%;
  min-height: 20vh;
  max-height: 20vh;

  object-fit: cover;
  border-radius: 0.5rem;
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

  background: var(--green-1);
  color: var(--white);
  border: 1.5px solid var(--green-1);

  padding: 10px;
  border-radius: 50%;
  font-size: 1rem;

  position: absolute;
  bottom: 10px;
  right: 10px;

  transition: filter 0.6s;

  &:hover {
    filter: brightness(0.7);
  }
`;
