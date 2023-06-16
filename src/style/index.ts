import styled from "styled-components";

export const container = styled.div`
  padding: 0vh 4% 4vh 4%;
  /* overflow: hidden; */

  @media (min-width: 430px) {
    padding: 0vh 8% 8vh 8%;
  }
`;

export const box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 430px) {
    flex-direction: row;
  }
`;
