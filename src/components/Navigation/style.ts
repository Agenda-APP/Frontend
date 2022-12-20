import styled from "styled-components";

export const NavigationStyle = styled.div(({ theme }) => ({
  maxWidth: "231px",
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  boxShadow: theme.boxShadow.global,
  overflow: "inherit",
  background: "white",
  padding: "20px",
}));
