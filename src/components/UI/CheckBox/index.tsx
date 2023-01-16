import React, { FC } from "react";
import { CheckBoxStyle } from "./styles";
import { ReactComponent as Check } from "../../../assets/check.svg";

interface ICheckBox {
  isCompleted: boolean;
  onClick?: () => void;
}

export const CheckBox: FC<ICheckBox> = ({ isCompleted, onClick }) => {
  return (
    <CheckBoxStyle onClick={onClick}>{isCompleted && <Check />}</CheckBoxStyle>
  );
};
