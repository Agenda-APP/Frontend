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
      id: 1,
      icon: home,
      name: "Дом",
      link: "/home",
    },
    {
      id: 2,
      icon: users,
      name: "Семья",
      link: "/family",
    },
    {
      id: 3,
      icon: briefcase,
      name: "Работа",
      link: "/work",
    },
    {
      id: 4,
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
      id: 5,
      icon: trendingUp,
      name: "Статистика",
      link: "/statistics",
    },
    {
      id: 6,
      icon: staticIcon,
      name: "Сравнить",
      link: "/compare",
    },
  ],
};
