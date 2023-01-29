import React, { FC } from "react";

import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";

import { Image } from "./style";

export const ImageTheme: FC = () => {
  return (
    <>
      {true ? <Image src={moon} alt="moon" /> : <Image src={sun} alt="sun" />}
    </>
  );
};
