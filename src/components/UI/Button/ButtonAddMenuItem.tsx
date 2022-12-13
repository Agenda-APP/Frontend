import React, { FC } from "react";
import plus from "../../../assets/plus-square.svg";
import styled from "styled-components";
import { SpanText, theme } from "../../../style";

const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const ButtonAddMenuItem: FC = () => {
  return (
    <ButtonAdd>
      <img src={plus} alt="plus" />
      <SpanText color={theme.colors.primary}>Добавить</SpanText>
    </ButtonAdd>
  );
};
export default ButtonAddMenuItem;
