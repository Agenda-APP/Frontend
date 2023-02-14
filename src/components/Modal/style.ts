import styled from "styled-components";

export const ModalStyle = styled.div(({ theme }) => ({
  position: "fixed",
  width: "100%",
  height: "100vh",
  background: theme.colors.grey,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
