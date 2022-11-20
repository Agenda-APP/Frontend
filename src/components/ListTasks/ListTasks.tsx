import React, { FC, useState } from "react";
import "./ListTasks.css";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import trash from "../../assets/delete.svg";
import Flex from "../Flex/Flex";
import { CheckBox } from "../Checkbox/CheckBox";

type List = { id: number; value: string; isCompleted: boolean };

interface ListItemProps {
  mockList: List[];
}

const ListTask: FC<ListItemProps> = ({ mockList }) => {
  const [list, setList] = useState(mockList);
  const handleDelete = (currentId: number) => {
    const cloneList = [...list];
    const tempo = cloneList.filter(({ id }) => currentId !== id);
    setList(tempo);
  };
  const handleCheck = (currentId: number) => {
    const copy = [...list];
    copy.map((item) => {
      if (item.id === currentId) {
        item.isCompleted = !item.isCompleted;
      }
    });
    setList(copy);
  };
  const render = list.map(({ id, value, isCompleted }) => (
    <li className="task_item" key={id}>
      <Flex>
        <CheckBox
          isCompleted={isCompleted}
          handleCheck={() => handleCheck(id)}
        />
        <input
          className="task_value"
          type="text"
          value={value}
          placeholder={value}
          disabled
        />
      </Flex>
      <Flex justify="space-between" align="center">
        <Edit />
        <img onClick={() => handleDelete(id)} src={trash} alt="trash" />
      </Flex>
    </li>
  ));

  return <div>{render}</div>;
};

export default ListTask;
