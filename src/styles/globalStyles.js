import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  *,
  ::before,
  ::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;

    font-family: ${theme.font.family};
    font-size: ${theme.font.size};
    color: ${theme.colors.textMain};
    background-color: ${theme.colors.bgMain};
    /* overflow: scroll; */

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
