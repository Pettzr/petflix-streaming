import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${theme.fonts.text};
    font-size: 16px;
    overflow-x: hidden;
    min-height: 100%;

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 22px;
    }

    @media (min-width: ${theme.breakpoints.largeDesktop}) {
      font-size: 34px;
    }

    @media (min-width: ${theme.breakpoints.fourK}) {
      font-size: 42px;
    }
  }

  body {
    background: ${theme.background.mainBackground}
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

  button {
    font-family: ${theme.fonts.text};
    background: none;
    border: none;
    cursor: pointer;}
`

export default GlobalStyle;