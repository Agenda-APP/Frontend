import React, { FC } from "react";

import { Message } from "./style";

import { List } from "../../../models/tasks.interface";

export enum Empty {
  active = "Активных задач нет",
  completed = "Завершенных задач нет",
}

interface IEmptyTasks {
  tasks: List[];
  title: Empty;
}

export const EmptyTasks: FC<IEmptyTasks> = ({ tasks, title }) => {
  return <>{tasks.length === 0 && <Message>{title}</Message>}</>;
};
