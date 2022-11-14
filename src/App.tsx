import React, { FC } from "react";
import "../src/global.css";
import { Menu } from "./components/Menu/Menu";
import Flex from "./components/Flex/Flex";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useThemes } from "./hooks/use-themes";

const App: FC = () => {
  const { theme, setTheme } = useThemes(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="wrapper">
      <Menu />
      <Flex direction="column" margin="0 60px" width="85%">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Main />
      </Flex>
    </div>
  );
};

export default App;
