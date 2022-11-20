import React, { FC } from "react";
import logo from "../../assets/logo.svg";
import "./Logo.scss";

const Logo: FC = () => {
  return (
    <div className="wrap_logo">
      <img src={logo} alt="logo" />
      <span>
        Tasks <br></br> Book
      </span>
    </div>
  );
};

export default Logo;
