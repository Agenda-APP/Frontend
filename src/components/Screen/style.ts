import styled from "styled-components";

export const MainWrapperStyle = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: `${theme.width.navigation} ${theme.width.main}`,
  gap: "70px",
  background: theme.colors.bgBody,
}));
