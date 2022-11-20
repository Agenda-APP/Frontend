import React, { FC, ReactNode } from "react";

interface IMenuItem {
  title: string;
  children: ReactNode;
  href?: string;
}

const MenuItem: FC<IMenuItem> = ({ title, children, href }) => {
  return (
    <>
      <li>
        <a href={href}>
          {children}
          {title}
        </a>
      </li>
    </>
  );
};

export default MenuItem;
