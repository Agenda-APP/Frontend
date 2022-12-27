export interface IMenuItem {
  id: number;
  icon: string;
  name: string;
  link: string;
}
export interface IMenu {
  title: string;
  items: IMenuItem[];
}
