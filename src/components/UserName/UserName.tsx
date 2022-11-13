import React, { FC } from "react";
import Flex from "../Flex/Flex";
import "./UserName.css";
import headerAvatar from "../../assets/headerAvatar.svg";

interface IUserName {
  toggle: boolean;
}

const UserName: FC<IUserName> = ({ toggle }) => {
  return (
    <Flex justify="space-between" align="center" padding="10px" toggle={toggle}>
      <p className="username_title">
        Хорошего дня, <span>username</span>
      </p>
      <img className="username_img" src={headerAvatar} alt="Avatar" />
      <div
        className="btn_menu"
        style={toggle ? { background: "#21262f" } : { background: "#FAFAFA" }}
      >
        <span></span>
      </div>
    </Flex>
  );
};
export default UserName;
