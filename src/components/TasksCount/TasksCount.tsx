import React, { FC } from "react";
import "./TasksCount.css";

interface ITaskCount {
  title: string;
  count: number;
}

const TasksCount: FC<ITaskCount> = ({ title, count }) => {
  return (
    <>
      <div>
        <p className="task_title">{title}</p>
        <div className="task_border">
          <p id="task_count">{count}</p>
          <span>задач</span>
        </div>
      </div>
    </>
  );
};
export default TasksCount;
