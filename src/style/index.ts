import styled from "styled-components";

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5vh;

  padding-left: 4%;
  padding-bottom: 8vh;

  @media (min-width: 430px) {
    padding: 0vh 8% 8vh 8%;
    flex-direction: row;
    gap: 0;
  }
`;
