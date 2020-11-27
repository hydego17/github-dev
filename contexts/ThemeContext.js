import { createContext } from "react";

export const themes = {
  light: {
    type: "light",
    color: "#000000",
    background: "#ffffff",
    hoverClr: "#507496",
    cardBg: "#edf2f7",
    navBg: `rgba(255, 255, 255, 0.8)`,
  },
  dark: {
    type: "dark",
    color: "rgba(250, 250, 250)",
    background: "rgb(38, 39, 46)",
    cardBg: `#2D3748`,
    hoverClr: "rgb(200, 200, 200)",
    navBg: `rgba(38, 39, 46, 0.8)`,
  },
};

export const ThemeContext = createContext({});
