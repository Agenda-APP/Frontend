import styled from "styled-components";

export const FormStyle = styled.form(({ theme }) => ({
  width: theme.sizeModal.width,
  background: theme.colors.bgBody,
  height: theme.sizeModal.height,
  padding: theme.sizes.l,
  borderRadius: theme.borders.s,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));
