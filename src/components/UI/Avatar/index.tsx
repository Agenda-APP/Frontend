import React, { FC } from "react";

import { AvatarStyle } from "./style";

export enum Variant {
  header = "44px",
  profile = "150px",
}

interface IAvatar {
  img: string;
  size?: Variant;
}

export const Avatar: FC<IAvatar> = ({ img, size = Variant.header }) => {
  return <AvatarStyle src={img} alt="avatar" size={size} />;
};
