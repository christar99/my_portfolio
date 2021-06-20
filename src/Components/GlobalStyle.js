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
    }
    body {
        background-color: #E9E9E9;  
        font-family: 'Do Hyeon', sans-serif;
    }
`;

export default GlobalStyle;