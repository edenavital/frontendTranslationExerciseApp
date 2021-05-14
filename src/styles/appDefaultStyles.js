import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
html {
  box-sizing: border-box;  
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  font-family: open-sans, sans-serif;  
  margin: 0;
  padding: 0;
}
`;
