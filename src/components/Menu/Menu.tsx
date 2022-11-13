import React, { FC } from "react";
import Logo from "../Logo/Logo";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";
import home from "../../assets/iconMenu/home.svg";
import logIn from "../../assets/iconMenu/log-in.svg";
import briefcase from "../../assets/iconMenu/briefcase.svg";
import sport from "../../assets/iconMenu/molniya.svg";
import users from "../../assets/iconMenu/users.svg";
import trendingUp from "../../assets/iconMenu/trending-up.svg";
import staticIcon from "../../assets/iconMenu/static.svg";
import plusIcon from "../../assets/iconMenu/plus-square.svg";

interface IMenu {
  toggle: boolean;
}
export const Menu: FC<IMenu> = ({ toggle }) => {
  return (
    <div
      className="menu"
      style={
        toggle ? { backgroundColor: "#2C3440" } : { backgroundColor: "white" }
      }
    >
      <Logo />
      <nav className="nav">
        <h1 className="title_item">Категории</h1>
        <ul className="menu_list">
          <MenuItem toggle={toggle} title="Дом" src={home}></MenuItem>
          <MenuItem toggle={toggle} title="Семья" src={users}></MenuItem>
          <MenuItem toggle={toggle} title="Работа" src={briefcase}></MenuItem>
          <MenuItem toggle={toggle} title="Спорт" src={sport}></MenuItem>
          <button className="btn_add">
            <img src={plusIcon} alt="Плюс" />
            Добавить
          </button>
        </ul>
        <h2 className="title_item">Данные</h2>
        <ul className="menu_list">
          <MenuItem
            toggle={toggle}
            title="Статистика"
            src={staticIcon}
          ></MenuItem>
          <MenuItem
            toggle={toggle}
            title="Сравнить"
            src={trendingUp}
          ></MenuItem>
        </ul>
      </nav>
      <div id="logIn">
        <ul className="menu_list">
          <MenuItem toggle={toggle} title="Выйти" src={logIn}></MenuItem>
        </ul>
      </div>
    </div>
  );
};
