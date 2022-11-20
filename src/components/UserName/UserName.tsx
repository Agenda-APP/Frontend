import React, { FC } from "react";
import Flex from "../Flex/Flex";
import "./UserName.css";
import headerAvatar from "../../assets/headerAvatar.svg";

interface IUserName {
  handleMenu: () => void;
  menu: boolean;
}

const UserName: FC<IUserName> = ({ handleMenu, menu }) => {
  return (
    <Flex justify="space-between" align="center" padding="10px">
      <p className="username_title">
        Хорошего дня, <span>username</span>
      </p>
      <img className="username_img" src={headerAvatar} alt="Avatar" />
      <div className="btn_menu" onClick={handleMenu}>
        <span className="arrow_down"></span>
      </div>
    </Flex>
  );
};
export default UserName;
