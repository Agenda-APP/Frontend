import React, { FC } from "react";

import { SelectStyle } from "./style";
import { Colors, FontSize, Text, WeightText } from "../../../../styles";

import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

import { IFormInputs } from "../index";

export interface IData {
  id: string;
  currentValue: string;
  label: string;
}

interface ISelect {
  options: IData[];
  title: string;
  control: Control<IFormInputs>;
  name: "category" | "priority";
}

export const Select: FC<ISelect> = ({ options, control, title, name }) => {
  return (
    <div>
      <Text weight={WeightText.m} size={FontSize.s}>
        {title}
      </Text>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "Выберите поле",
        }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <>
            <SelectStyle onChange={onChange} value={value} ref={ref}>
              <option disabled selected>
                Выбрать
              </option>
              {options.map(({ currentValue, label, id }) => (
                <option key={id} value={currentValue}>
                  {label}
                </option>
              ))}
            </SelectStyle>
            {error && (
              <Text color={Colors.warning} weight={WeightText.m}>
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </div>
  );
};
