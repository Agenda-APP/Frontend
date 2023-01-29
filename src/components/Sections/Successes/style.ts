import styled from "styled-components";

enum SizeBlock {
  width = "100px",
  height = "125px",
}

export const Wrap = styled.div({
  width: SizeBlock.width,
  height: SizeBlock.height,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Border = styled.div(({ theme }) => ({
  width: "100%",
  height: "100px",
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: "200px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Count = styled.p(({ theme }) => ({
  fontWeight: theme.fontWeight.m,
  fontSize: theme.fontSize.xll,
  color: theme.colors.primary,
}));
