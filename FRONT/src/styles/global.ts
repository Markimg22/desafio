import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: monospace, sans-serif;
    font-size: 62.5%;

    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary}
  }

  button, input {
    border: none;
  }

  button {
    background-color: transparent;
    transition: opacity .2s ease-in-out;
  }

  button:hover {
    opacity: .7;
    cursor: pointer;
  }
`;
