/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      background-color: #29773e;
      text-decoration: none;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-size: 62.5%;
      margin: 0;
      border: 0;
      outline: 0;
  }
`;

export default GlobalStyle;
