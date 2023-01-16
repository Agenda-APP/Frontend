import React, { ChangeEvent, FC } from "react";
import { InputStyle } from "./style";

export enum Line {
  through = "line-through",
  none = "none",
}

interface ITaskWrapper {
  nameTask: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  line?: Line;
}

export const Input: FC<ITaskWrapper> = ({
  nameTask,
  onChange,
  disabled,
  line = Line.none,
}) => {
  return (
    <InputStyle
      value={nameTask}
      onChange={onChange}
      placeholder="Напишите задачу"
      disabled={disabled}
      line={line}
    />
  );
};
