import { createContext, useState } from "react";

export const themeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [color, setColor] = useState("#004aad");
  const [boxShadow, setBoxShadow] = useState("0 20px 25px -5px #6957af");

  const value = {
    color,
    setColor,
    boxShadow,
    setBoxShadow,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
