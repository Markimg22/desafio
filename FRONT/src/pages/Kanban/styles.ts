import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 3rem;

  @media (max-width: 780px) {
    align-items: center;
    flex-direction: column;
  }
`;
