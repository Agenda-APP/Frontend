import React, { FC } from "react";
import { Variant } from "../UI/Title";
import {
  ActiveTasks,
  CompletedTasks,
  Section,
  Title,
  EmptyTasks,
} from "../../components";
import { useAppSelector } from "../../hooks/redux";
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
      <Title variant={Variant.l}>Активные задачи</Title>
      <ul>
        {renderActiveTasks}
        <EmptyTasks tasks={tasks} title={Empty.active} />
      </ul>
      <Title variant={Variant.l}>Завершенные задачи</Title>
      <ul>
        {renderFilterTasks}
        <EmptyTasks tasks={filterTasks} title={Empty.completed} />
      </ul>
    </Section>
  );
};
