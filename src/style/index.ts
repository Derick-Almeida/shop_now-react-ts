import styled from "styled-components";

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4vh;

  padding-bottom: 4vh;
  margin: 0 auto;

  @media (min-width: 430px) {
    padding-bottom: 8vh;
    width: 90%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1280px) {
    padding-bottom: 5vh;
    width: 84%;
    max-width: 2000px;
  }
`;
