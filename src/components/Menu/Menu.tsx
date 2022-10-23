import React from "react";
import logo from "./logo.svg";
import home from "../../icon/home.svg";
import family from "../../icon/family.svg";
import briefcase from "../../icon/briefcase.svg";
import zap from "../../icon/zap.svg";
import staticIcon from "../../icon/static.svg";
import trendingUp from "../../icon/trending-up.svg";
import logIn from "../../icon/log-in.svg";
import plusIcon from "../../icon/plus-square.svg";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu_logo">
        <img src={logo} alt="logo" />
        <span className="logo">
          Task <br /> Book
        </span>
      </div>
      <p className="title_item">Категории</p>
      <ul>
        <li id="home">
          <img src={home} alt="home" />
          Дом
        </li>
        <li>
          <img src={family} alt="family" />
          Семья
        </li>
        <li>
          <img src={briefcase} alt="briefcase" />
          Работа
        </li>
        <li>
          <img src={zap} alt="zap" />
          Спорт
        </li>
      </ul>
      <button id="add_category">
        <img src={plusIcon} alt="plus" />
        Добавить
      </button>
      <p className="title_item">Данные</p>
      <ul>
        <li>
          <img src={staticIcon} alt="staticIcon" />
          Статистика
        </li>
        <li>
          <img src={trendingUp} alt="staticIcon" />
          Сравнить
        </li>
      </ul>
      <div id="logIn">
        <img src={logIn} alt="Log in" />
        Выйти
      </div>
    </div>
  );
};
