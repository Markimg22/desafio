import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fonts.medium};
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 80%;
  min-height: 2rem;
  @media (max-width: 1175px) {
    font-size: ${(props) => props.theme.fonts.default};
  }
  @media (max-width: 780px) {
    font-size: ${(props) => props.theme.fonts.medium};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fonts.medium};
  max-width: 80%;
  word-wrap: break-word;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.fonts.default};
  text-align: justify;
  word-wrap: break-word;
  @media (max-width: 780px) {
    font-size: ${(props) => props.theme.fonts.default};
  }
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.fonts.medium};
  font-weight: bold;
  width: 80%;
  padding: 0.5rem;
`;

export const TextArea = styled.textarea`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.fonts.medium};
  font-weight: bold;
  width: 100%;
  padding: 0.5rem;
  resize: vertical;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.fonts.medium};
`;

export const Stop = styled.button`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fonts.medium};
`;

export const Delete = styled.button`
  margin-top: 2.5rem;
  padding: 0.3rem;
  width: 45%;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.medium};
`;

export const Create = styled.button`
  margin-top: 2.5rem;
  padding: 0.3rem;
  width: 45%;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.medium};
`;

export const Update = styled.button`
  margin-top: 2.5rem;
  padding: 0.3rem;
  width: 45%;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.medium};
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerArrows = styled(ContainerButtons)`
  margin-top: 1rem;
`;
