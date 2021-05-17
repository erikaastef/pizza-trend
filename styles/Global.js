import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    width: 100%;
    height: 100%; 
}

body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Georgia', sans-serif;
    font-size: 16px;
    font-weight: 300;
    background:${({ theme }) => theme.colors.blue};
    color:${({ theme }) => theme.colors.white};
    * {
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    
    &::-webkit-scrollbar-track {
        box-shadow: none;
        -webkit-box-shadow: none;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color:${({ theme }) => theme.colors.red};
        outline: 0;
        border-radius: 4px;
       
    }
}
}


/* Helpers */

.wrapper{
    width:100%;
    max-width: 1114px;
    margin:0 auto;
    @media(max-width: 1200px){
        width:95vw;
    }
}
`