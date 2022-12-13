import { IMenu } from "./menu.interface";

export const categoryMenu: IMenu = {
  title: "Категории",
  items: [
    {
      icon: "MdOutlineHome",
      name: "Дом",
      link: "/home",
    },
    {
      icon: "MdSupervisorAccount",
      name: "Семья",
      link: "/family",
    },
    {
      icon: "MdOutlineCases",
      name: "Работа",
      link: "/work",
    },
    {
      icon: "MdSportsBaseball",
      name: "Спорт",
      link: "/sport",
    },
  ],
};

export const staticMenu: IMenu = {
  title: "Данные",
  items: [
    {
      icon: "MdEqualizer",
      name: "Статистика",
      link: "/static",
    },
    {
      icon: "MdTrendingUp",
      name: "Сравнить",
      link: "/compare",
    },
  ],
};

export const menus: IMenu[] = [categoryMenu, staticMenu];
