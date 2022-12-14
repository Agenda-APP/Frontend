import React, { FC } from "react";
import plus from "../../../assets/plus-square.svg";
import styled from "styled-components";
import { StyledText, theme } from "../../../styles/style";

const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  margin-top: 25px;
  border: none;
  background: transparent;
`;

const ButtonAddMenuItem: FC = () => {
  return (
    <ButtonAdd>
      <img src={plus} alt="plus" />
      <StyledText color={theme.colors.primary}>Добавить</StyledText>
    </ButtonAdd>
  );
};

export default ButtonAddMenuItem;
