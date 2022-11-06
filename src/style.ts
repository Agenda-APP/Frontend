import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle({
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

export const theme = {
  colors: {
    primary: "#29A19C",
    secondary: "#222831",
    warning: "#F05454",
    classic: "white",
  },
  borders: {
    s: 4,
    m: 8,
    l: 12,
    round: "100%",
  },
  border: {
    none: 0,
    primaryBorder: "2px solid #29A19C",
    warningBorder: "2px solid #F05454",
  },
};
