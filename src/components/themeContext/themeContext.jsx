import { useState } from "react";
import { ThemeContext } from ".";
import { UserContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("softOrange");
  const [login, setLogin] = useState(false);
  const valid = (userFalse) => {
    setLogin(userFalse);
  };
  const toggleTheme = () => {
    if (theme === "softOrange") {
      setTheme("dark");
    } else {
      setTheme("softOrange");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ login, valid }}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
