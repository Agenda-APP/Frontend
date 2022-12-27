import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *  
    {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    button
    {
      cursor: pointer;
      border: none;
      background: transparent;
    }
    a
    {
      text-decoration: none;
      color: inherit;
    }
    ul, li
    {
      list-style: none;
      padding: 0;
    }
    `;
