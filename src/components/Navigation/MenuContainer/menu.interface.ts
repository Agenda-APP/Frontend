import { TypeMaterialIconName } from "../../../types/icons.types";

export interface IMenuItem {
  icon: TypeMaterialIconName;
  name: string;
  link: string;
}
export interface IMenu {
  title: string;
  items: IMenuItem[];
}
