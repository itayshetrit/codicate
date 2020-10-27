import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
html{
    width:100%;
    height: 100%;
    scroll-behavior: smooth !important;
}
::selection {
  background: rgba(255, 174, 0, 0.699);
}

*,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing: border-box;

}
`;

export default GlobalStyle
