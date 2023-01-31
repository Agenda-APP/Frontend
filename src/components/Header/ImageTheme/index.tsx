import React, { FC } from "react";

import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";

import { Image } from "./style";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleTheme } from "../../../store/themeSlice";

export const ImageTheme: FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeToggle);
  const isDarkTheme = theme === "dark";
  return (
    <>
      {isDarkTheme ? (
        <Image
          src={sun}
          alt="sun"
          onClick={() => dispatch(toggleTheme("light"))}
        />
      ) : (
        <Image
          src={moon}
          alt="moon"
          onClick={() => dispatch(toggleTheme("dark"))}
        />
      )}
    </>
  );
};
