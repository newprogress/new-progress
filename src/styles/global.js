import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {

    }

    body {
        /* background: ; */
        /* font-family: ; */
    }

    border-list-style, input, button {
        /* font-family: ; */
        /* font-size: ; */
    }

    h1, h2, h3, h4, h5, h6 {
        /* font-family: ; */
    }

    button {
        cursor: pointer;
    }

    a {
        /* color: ; */
        text-decoration: none;
    }
`;
