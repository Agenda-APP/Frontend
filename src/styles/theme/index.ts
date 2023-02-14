export const Theme = (themeType: string) => {
  const theme = {
    colors: {
      primary: "#29A19C",
      bgBody: themeType === "dark" ? "#222831" : "#F9F9F9",
      warning: "#F05454",
      text: themeType === "dark" ? "#F9F9F9" : "#2C3440",
      bg: themeType === "dark" ? "#2C3440" : "#FFFFFF",
      grey: "rgba(109,108,108,0.38)",
      dark: "#222831",
      white: "#FFFFFF",
    },
    borders: {
      s: "10px",
      m: "15px",
      borderTasks:
        themeType === "dark"
          ? "1px solid rgba(249, 249, 249, 0.2)"
          : "1px solid rgba(40, 40, 70, 0.1)",
    },
    fontWeight: {
      s: 400,
      m: 600,
    },
    fontSize: {
      xs: "12px",
      s: "14px",
      m: "16px",
      l: "18px",
      xl: "24px",
      xll: "36px",
    },
    sizes: {
      none: "0",
      xs: "10px",
      s: "15px",
      m: "20px",
      l: "25px",
    },
    width: {
      full: "100%",
      navigation: "231px",
      main: "1069px",
    },
    boxShadow: {
      global: "0px 10px 25px rgba(29, 52, 54, 0.08)",
    },
    animation: {
      main: "all 300ms ease",
    },
    sizeModal: {
      width: "700px",
      height: "400px",
    },
  };
  return theme;
};
