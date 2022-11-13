import React, { FC } from "react";
import "./TasksCount.css";

interface ITaskCount {
  title: string;
  count: number;
  toggle: boolean;
}

const TasksCount: FC<ITaskCount> = ({ title, count, toggle }) => {
  return (
    <>
      <div>
        <p
          className="task_title"
          style={toggle ? { color: "white" } : { color: "black" }}
        >
          {title}
        </p>
        <div className="task_border">
          <p id="task_count">{count}</p>
          <span style={toggle ? { color: "white" } : { color: "black" }}>
            задач
          </span>
        </div>
      </div>
    </>
  );
};
export default TasksCount;
