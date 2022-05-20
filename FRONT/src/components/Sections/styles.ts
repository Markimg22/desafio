import styled from 'styled-components';

export const Section = styled.section`
  font-size: ${(props) => props.theme.fonts.large};
  width: 20%;
  @media (max-width: 1175px) {
    font-size: ${(props) => props.theme.fonts.medium};
  }
  @media (max-width: 780px) {
    width: 90%;
    font-size: ${(props) => props.theme.fonts.large};
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const Button = styled.button`
  transition: opacity 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.large};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
