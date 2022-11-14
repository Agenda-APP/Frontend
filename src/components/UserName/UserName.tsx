import React, { FC } from "react";
import Flex from "../Flex/Flex";
import "./UserName.css";
import headerAvatar from "../../assets/headerAvatar.svg";

const UserName: FC = () => {
  return (
    <Flex justify="space-between" align="center" padding="10px">
      <p className="username_title">
        Хорошего дня, <span>username</span>
      </p>
      <img className="username_img" src={headerAvatar} alt="Avatar" />
      <div className="btn_menu">
        <span></span>
      </div>
    </Flex>
  );
};
export default UserName;
