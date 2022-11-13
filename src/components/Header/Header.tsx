import React, { FC } from "react";
import Flex from "../Flex/Flex";
import UserName from "../UserName/UserName";
import { Button } from "../UI/Button/Button";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

interface IHeader {
  onToggle: () => void;
  toggle: boolean;
}

const Header: FC<IHeader> = ({ onToggle, toggle }) => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      width="100%"
      padding="15px 15px"
      toggle={toggle}
    >
      <Button children="Добавить задачу" />
      <button className="btn_toggle" onClick={onToggle}>
        <img src={toggle ? sun : moon} alt="moon" />
      </button>
      <UserName toggle={toggle} />
    </Flex>
  );
};
export default Header;
