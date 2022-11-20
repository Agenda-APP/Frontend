import React, { FC } from "react";
import "./ToggleMenu.css";
import { ReactComponent as User } from "../assets/toggleMenu/user.svg";
import { ReactComponent as Star } from "../assets/toggleMenu/star.svg";
import { ReactComponent as Setting } from "../assets/toggleMenu/settings.svg";
import { ReactComponent as LogOut } from "../assets/toggleMenu/log-out.svg";
import { ReactComponent as Moon } from "../assets/toggleMenu/moon.svg";

export const ToggleMenu: FC = () => {
  return (
    <div className="toggle_menu">
      <ul>
        <li>
          <a href="">
            <User /> Личный кабинет
          </a>
        </li>
        <li>
          <a href="">
            <Moon /> Темный режим
          </a>
        </li>
        <li>
          <a href="">
            <Setting /> Настройки
          </a>
        </li>
        <li>
          <a href="" className="premium">
            <Star /> Премиум
          </a>
        </li>
        <li>
          <a href="">
            <LogOut /> Выйти
          </a>
        </li>
      </ul>
    </div>
  );
};
