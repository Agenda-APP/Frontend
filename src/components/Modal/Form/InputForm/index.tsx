import React, { FC } from "react";

import { InputStyled } from "./style";
import { FontSize, Text, WeightText } from "../../../../styles";

import type { UseFormRegister } from "react-hook-form";

import { IFormInputs } from "../index";

export enum WidthInput {
  full = "100%",
  small = "200px",
}

interface IFormInput {
  type: string;
  title: string;
  placeholder?: string;
  width?: WidthInput;
  register: UseFormRegister<IFormInputs>;
  label: "nameTask" | "date";
  required?: boolean;
}

export const InputForm: FC<IFormInput> = ({
  type,
  title,
  placeholder,
  width = WidthInput.full,
  label,
  register,
  required = true,
}) => {
  return (
    <>
      <Text weight={WeightText.m} size={FontSize.s}>
        {title}
      </Text>
      <InputStyled
        width={width}
        type={type}
        placeholder={placeholder}
        {...register(label, { required })}
      />
    </>
  );
};
