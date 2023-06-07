import styled from "styled-components";
import image from "../../assets/folha.png";

export const aside = styled.aside`
  margin: 5vh 0;
  min-width: 27%;
  max-width: 27%;
  min-height: 55vh;
  max-height: 55vh;

  position: sticky;
  top: 5vh;

  background: url(${image}) no-repeat center;
  background-size: contain;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 2vh;
`;

export const container = styled.div`
  position: relative;
  right: 2%;
  width: 72%;
  height: 68%;
`;

export const ul = styled.ul`
  position: absolute;
  top: 0%;
  left: 0%;

  width: 100%;
  position: relative;
  min-height: 100%;

  & > :last-child {
    position: absolute;
    min-width: 100%;
    bottom: 0;
    font-weight: bold;
    border: none;
  }
`;

export const li = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  border-bottom: 2px solid var(--green-1);

  transition: background 0.3s;

  &:hover {
    cursor: pointer;
    background: var(--grey-1);
  }
`;

export const span = styled.span`
  font-weight: bold;
  color: var(--grey-2);
`;
