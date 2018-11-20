import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: 'https://fonts.googleapis.com/css?family=PT+Sans|Raleway';
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'system-ui', 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;
