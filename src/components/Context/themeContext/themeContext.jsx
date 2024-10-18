import { useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("softOrange");

  const toggleTheme = () => {
    if (theme === "softOrange") {
      setTheme("dark");
    } else {
      setTheme("softOrange");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
