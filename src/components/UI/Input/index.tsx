import React, { ChangeEvent, FC } from "react";
import { InputStyle } from "./style";

export enum LineThrough {
  through = "line-through",
  none = "none",
}

interface ITaskWrapper {
  nameTask: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  lineThrough?: LineThrough;
}

export const Input: FC<ITaskWrapper> = ({
  nameTask,
  onChange,
  disabled,
  lineThrough = LineThrough.none,
}) => {
  return (
    <InputStyle
      value={nameTask}
      onChange={onChange}
      placeholder="Напишите задачу"
      disabled={disabled}
      lineThrough={lineThrough}
    />
  );
};
