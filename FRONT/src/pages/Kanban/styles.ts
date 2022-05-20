import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 780px) {
    align-items: center;
    flex-direction: column;
  }
`;
