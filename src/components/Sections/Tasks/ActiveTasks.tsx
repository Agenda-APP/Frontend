import React, { FC } from "react";

import { List } from "../../../models/tasks.interface";

import { CheckBox, Input } from "../../../components";

import { Flex } from "../../../styles";
import { TaskWrapper } from "./style";

import { edit, trash } from "../../../assets";

import { useAppDispatch } from "../../../hooks/redux";
import {
  getCurrentId,
  onChangeValue,
  toggleDisabled,
  removeTask,
  toggleComplete,
} from "../../../store/tasksSlice";

interface ListItemProps {
  task: List;
}

export const ActiveTasks: FC<ListItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { id, isCompleted, value, isDisabled } = task;

  return (
    <>
      <TaskWrapper onClick={() => dispatch(getCurrentId(id))}>
        <CheckBox
          isCompleted={isCompleted}
          onClick={() => dispatch(toggleComplete(id))}
        />
        <Input
          nameTask={value}
          disabled={isDisabled}
          onChange={(e) => dispatch(onChangeValue(e.target.value))}
        />
        <Flex>
          <img
            onClick={() => dispatch(toggleDisabled(id))}
            src={edit}
            alt="edit"
          />
          <img
            onClick={() => dispatch(removeTask(id))}
            src={trash}
            alt="trash"
          />
        </Flex>
      </TaskWrapper>
    </>
  );
};
