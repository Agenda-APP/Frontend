import React, { FC } from "react";
import { CheckBox, Input } from "../../components";
import { TaskWrapper } from "./style";
import { List } from "../../models/tasks.interface";
import { Line } from "../UI/Input";

interface ITasksProps {
  task: List;
}

export const CompletedTasks: FC<ITasksProps> = ({ task }) => {
  const { id, isCompleted, value } = task;
  return (
    <>
      <TaskWrapper key={id}>
        <CheckBox isCompleted={isCompleted} />
        <Input key={id} nameTask={value} disabled={true} line={Line.through} />
      </TaskWrapper>
    </>
  );
};
