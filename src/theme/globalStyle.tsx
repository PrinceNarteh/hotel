import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::before,**::after{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

     html {
        font-size: 62.5%;
        overflow-x: hidden;
    }

   body {
        background-color: #fceffa;
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
    }

    li {
        list-style: none;
    }
`;
