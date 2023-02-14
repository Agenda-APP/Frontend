import React, { FC } from "react";
import { VariantSize } from "../../UI/Title";
import {
  ActiveTasks,
  CompletedTasks,
  Section,
  Title,
  EmptyTasks,
} from "../../index";
import { useAppSelector } from "../../../hooks/redux";
import { Empty } from "./EmptyTasks";

export const Tasks: FC = () => {
  const tasks = useAppSelector((state) => state.tasksList.tasks);

  const filterTasks = tasks.filter((task) => task.isCompleted);

  const renderActiveTasks = tasks.map((task) => (
    <ActiveTasks task={task} key={task.id} />
  ));

  const renderFilterTasks = filterTasks.map((task) => (
    <CompletedTasks task={task} key={task.id} />
  ));

  return (
    <Section>
      <Title variant={VariantSize.l}>Активные задачи</Title>
      <ul>
        {renderActiveTasks}
        <EmptyTasks tasks={tasks} title={Empty.active} />
      </ul>
      <Title variant={VariantSize.l}>Завершенные задачи</Title>
      <ul>
        {renderFilterTasks}
        <EmptyTasks tasks={filterTasks} title={Empty.completed} />
      </ul>
    </Section>
  );
};
