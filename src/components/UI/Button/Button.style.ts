import styled from "styled-components";

export const ButtonStyled = styled.button((props) => ({
  width: 186,
  height: 42,
  background: props.theme.colors.primary,
  borderRadius: props.theme.borders.m,
  outline: "inherit",
  border: 0,
  cursor: "pointer",
  color: "white",
}));
