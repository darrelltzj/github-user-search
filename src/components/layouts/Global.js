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

  .page-appear {
    opacity: 0;
  }

  .page-appear.page-appear-active {
    opacity: 1;
    transition: all 0.6s linear;
  }

  .page-enter {
    opacity: 0;
  }

  .page-enter.page-enter-active {
    opacity: 1;
    transition: all 0.6s linear 0.4s;
  }

  .page-leave {
    opacity: 1.0;
    position:absolute
  }

  .page-leave.page-leave-active {
    opacity: 0;
    transition: all 0.6s linear;
    position:absolute;
  }
`;
