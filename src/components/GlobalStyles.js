import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
}

video {
 object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index:-1;
    }
  
`;

export default GlobalStyles;
