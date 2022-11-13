import React, { FC, useState } from "react";
import "./ListTasks.css";
import edit from "../../assets/edit.svg";
import trash from "../../assets/delete.svg";
import Flex from "../Flex/Flex";

type List = { id: number; value: string };

interface ListItemProps {
  mockList: List[];
  toggle: boolean;
}

const ListTask: FC<ListItemProps> = ({ mockList, toggle }) => {
  const [list, setList] = useState(mockList);
  const handleDelete = (currentId: number) => {
    const cloneList = [...list];
    const tempo = cloneList.filter(({ id }) => currentId !== id);
    setList(tempo);
  };
  const render = list.map(({ id, value }) => (
    <li
      className="task_item"
      key={id}
      style={
        toggle
          ? { border: "1px solid rgba(249, 249, 249, 0.2)" }
          : { border: "1px solid rgba(40, 40, 70, 0.1)" }
      }
    >
      <Flex toggle={toggle}>
        <input
          type="checkbox"
          id="subscribeNews"
          name="subscribe"
          value="newsletter"
        />
        <input
          className="task_value"
          type="text"
          value={value}
          placeholder={value}
          disabled
          style={
            toggle
              ? { background: "#2C3440", color: "white" }
              : { background: "white" }
          }
        />
      </Flex>
      <div>
        <img id="edit" src={edit} alt="edit" />
        <img onClick={() => handleDelete(id)} src={trash} alt="trash" />
      </div>
    </li>
  ));

  return <div>{render}</div>;
};

export default ListTask;
