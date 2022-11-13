import React, { FC } from "react";

interface IMenuItem {
  title: string;
  src: string;
  toggle: boolean;
}

const MenuItem: FC<IMenuItem> = ({ title, src, toggle }) => {
  return (
    <li style={toggle ? { color: "white" } : { color: "black" }}>
      <a href="">
        <img src={src} alt={title} />
        {title}
      </a>
    </li>
  );
};

export default MenuItem;
