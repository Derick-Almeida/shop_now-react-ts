import styled from "styled-components";

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4vh;

  padding-bottom: 4vh;

  @media (min-width: 430px) {
    padding: 0vh 5% 8vh 5%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1280px) {
    padding: 0vh 8% 5vh 8%;
  }
`;
