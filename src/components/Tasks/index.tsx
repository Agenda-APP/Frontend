import React, { FC } from "react";
import { Variant } from "../UI/Title";
import { Section, Title, ActiveTasks, CompletedTasks } from "../../components";
import { useAppSelector } from "../../hooks/redux";
import { Message } from "./style";

export const Tasks: FC = () => {
  const tasks = useAppSelector((state) => state.tasksList.tasks);
  const filterTasks = tasks.filter((task) => task.isCompleted);
  return (
    <Section>
      <Title children="Активные задачи" variant={Variant.l} />
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => <ActiveTasks task={task} key={task.id} />)
        ) : (
          <Message>Активных задач нет</Message>
        )}
      </ul>
      <Title children="Завершенные задачи" variant={Variant.l} />
      <ul>
        {filterTasks.length > 0 ? (
          filterTasks.map((task) => (
            <CompletedTasks task={task} key={task.id} />
          ))
        ) : (
          <Message>Завершенных задач нет</Message>
        )}
      </ul>
    </Section>
  );
};
