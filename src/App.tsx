import React, { FC, useState } from "react";
import "../src/global.css";
import { Menu } from "./components/Menu/Menu";
import Flex from "./components/Flex/Flex";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App: FC = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div
      className="wrapper"
      style={toggle ? { background: "#21262f" } : { background: "white" }}
    >
      <Menu toggle={toggle} />
      <Flex direction="column" margin="0 60px" width="85%">
        <Header onToggle={onToggle} toggle={toggle} />
        <Main toggle={toggle} />
      </Flex>
    </div>
  );
};

export default App;
