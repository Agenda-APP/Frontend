import { IMenu } from "./types";
import home from "../../../assets/iconForMenu/home.svg";
import briefcase from "../../../assets/iconForMenu/briefcase.svg";
import zap from "../../../assets/iconForMenu/zap.svg";
import users from "../../../assets/iconForMenu/users.svg";
import trendingUp from "../../../assets/iconForMenu/trending-up.svg";
import staticIcon from "../../../assets/iconForMenu/bar-chart.svg";

export const categoryMenu: IMenu = {
  title: "Категории",
  items: [
    {
      icon: home,
      name: "Дом",
      link: "/home",
    },
    {
      icon: users,
      name: "Семья",
      link: "/family",
    },
    {
      icon: briefcase,
      name: "Работа",
      link: "/work",
    },
    {
      icon: zap,
      name: "Спорт",
      link: "/sport",
    },
  ],
};

export const staticMenu: IMenu = {
  title: "Данные",
  items: [
    {
      icon: trendingUp,
      name: "Статистика",
      link: "/statistics",
    },
    {
      icon: staticIcon,
      name: "Сравнить",
      link: "/compare",
    },
  ],
};
