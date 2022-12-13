import React, { FC } from "react";
import * as MaterialIcons from "react-icons/md";
import { TypeMaterialIconName } from "../../../types/icons.types";

export const MaterialIcon: FC<{ icon: TypeMaterialIconName }> = ({ icon }) => {
  // eslint-disable-next-line import/namespace
  const IconComponent = MaterialIcons[icon];

  return <IconComponent size={20} /> || <MaterialIcons.Md3DRotation />;
};
