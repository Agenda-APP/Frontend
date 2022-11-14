import React, { FC } from "react";
import Logo from "../Logo/Logo";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";
import { ReactComponent as Home } from "../../assets/iconMenu/home.svg";
import { ReactComponent as LogIn } from "../../assets/iconMenu/log-in.svg";
import { ReactComponent as Briefcase } from "../../assets/iconMenu/briefcase.svg";
import { ReactComponent as Sport } from "../../assets/iconMenu/molniya.svg";
import { ReactComponent as Users } from "../../assets/iconMenu/users.svg";
import { ReactComponent as TrendingUp } from "../../assets/iconMenu/trending-up.svg";
import { ReactComponent as StaticIcon } from "../../assets/iconMenu/static.svg";
import plusIcon from "../../assets/iconMenu/plus-square.svg";

export const Menu: FC = () => {
  return (
    <div className="menu">
      <Logo />
      <nav className="nav">
        <h1 className="title_item">Категории</h1>
        <ul className="menu_list">
          <MenuItem title="Дом">
            <Home className="svg" />
          </MenuItem>
          <MenuItem title="Семья">
            <Users className="svg" />
          </MenuItem>
          <MenuItem title="Работа">
            <Briefcase className="svg" />
          </MenuItem>
          <MenuItem title="Спорт">
            <Sport className="svg" />
          </MenuItem>
          <button className="btn_add">
            <img src={plusIcon} alt="Плюс" />
            Добавить
          </button>
        </ul>
        <h2 className="title_item">Данные</h2>
        <ul className="menu_list">
          <MenuItem title="Статистика">
            <StaticIcon className="svg" />
          </MenuItem>
          <MenuItem title="Сравнить">
            <TrendingUp className="svg" />
          </MenuItem>
        </ul>
      </nav>
      <div id="logIn">
        <ul className="menu_list">
          <MenuItem title="Выйти">
            <LogIn className="svg" />
          </MenuItem>
        </ul>
      </div>
    </div>
  );
};
