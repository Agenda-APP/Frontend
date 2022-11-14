import { useLayoutEffect, useState } from "react";

export const useThemes = (light: boolean) => {
  const [theme, setTheme] = useState(false);
  const currentTheme = theme ? "light" : "dark";
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);
  return {
    theme,
    setTheme,
  };
};
