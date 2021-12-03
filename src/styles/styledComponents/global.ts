import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html,
  body {
    padding: 0;
    margin: 0;
    background:${({ theme }) => theme.background.darkblue} ;
  }

  body{ 
     //para não deixar o texto serrilhado
     -webkit-font-smoothing: antialiased;
  }
  
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; 
    }
    @media (max-width: 720px){
      font-size: 87.5%; 
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  ul,ol, li{
    list-style: none;
  }

   button{
    cursor: pointer;    
  }

  body, input, textarea, button {
    font-family:"Ubuntu", sans-serif;
    font-weight: 400;

  }

  h1, h2, h3, h4, h5, h6, p, strong{
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   font: inherit;
   vertical-align: baseline;
   font-weight: 600;
  }

  * {
    box-sizing: border-box;

    ::-webkit-scrollbar {
    display: none;
    }
    ::-webkit-scrollbar-thumb {
     display: none;
    }

  transition: all 0.5s;

  }

`;
