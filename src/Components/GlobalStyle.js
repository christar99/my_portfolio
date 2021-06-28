import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }
    
    html, body, #root {
        width: 100%;
        height: 100%;
        font-size: 62.5%;
    }
    body {
        font-family: 'Do Hyeon', sans-serif;
        color: #DADADA;
        background-color: #1D1D1D;
    }
`;

export default GlobalStyle;