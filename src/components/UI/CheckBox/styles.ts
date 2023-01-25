import styled from "styled-components";

export const CheckBoxStyle = styled.div(({ theme }) => ({
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: "4px",
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
}));
