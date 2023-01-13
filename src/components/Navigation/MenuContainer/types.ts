export interface IMenuItem {
  id: string;
  icon: string;
  name: string;
  link: string;
}
export interface IMenu {
  title: string;
  singleMenu: IMenuItem[];
}
