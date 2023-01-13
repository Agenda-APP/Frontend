import { IMenu } from "./types";
import {
  home,
  briefcase,
  zap,
  users,
  trendingUp,
  staticIcon,
} from "../../../assets";

export const categoryMenu: IMenu = {
  title: "Категории",
  singleMenu: [
    {
      id: "1",
      icon: home,
      name: "Дом",
      link: "/home",
    },
    {
      id: "2",
      icon: users,
      name: "Семья",
      link: "/family",
    },
    {
      id: "3",
      icon: briefcase,
      name: "Работа",
      link: "/work",
    },
    {
      id: "4",
      icon: zap,
      name: "Спорт",
      link: "/sport",
    },
  ],
};

export const staticMenu: IMenu = {
  title: "Данные",
  singleMenu: [
    {
      id: "5",
      icon: trendingUp,
      name: "Статистика",
      link: "/statistics",
    },
    {
      id: "6",
      icon: staticIcon,
      name: "Сравнить",
      link: "/compare",
    },
  ],
};
