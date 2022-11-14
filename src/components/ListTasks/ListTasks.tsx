import React, { FC, useState } from "react";
import "./ListTasks.css";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import trash from "../../assets/delete.svg";
import Flex from "../Flex/Flex";

type List = { id: number; value: string };

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
  const render = list.map(({ id, value }) => (
    <li className="task_item" key={id}>
      <Flex>
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
        />
      </Flex>
      <Flex justify="space-between">
        <Edit />
        <img onClick={() => handleDelete(id)} src={trash} alt="trash" />
      </Flex>
    </li>
  ));

  return <div>{render}</div>;
};

export default ListTask;
