import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: #19181F;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3d3d46;
    border-radius: 3px;
  }

  *, input, button {
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  :root {
    --base: #100523;
    --text-dark: #123;
    --text-light: #FFFF;
    --contrast: #FFFF;
  }
`