import React, { FC } from "react";
import { CheckBox, Input } from "../../index";
import { TaskWrapper } from "./style";
import { List } from "../../../models/tasks.interface";
import { LineThrough } from "../../UI/Input";

interface ITasksProps {
  task: List;
}

export const CompletedTasks: FC<ITasksProps> = ({ task }) => {
  const { id, isCompleted, value } = task;
  return (
    <>
      <TaskWrapper key={id}>
        <CheckBox isCompleted={isCompleted} />
        <Input
          key={id}
          nameTask={value}
          disabled={true}
          lineThrough={LineThrough.through}
        />
      </TaskWrapper>
    </>
  );
};
