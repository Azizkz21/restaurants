import { Button } from "../button/Button";
import { useTheme } from "../../Context/themeContext/useTheme";
import style from "./toggleThemeButton.module.css"

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();
  return <Button onClick={toggleTheme} className={style.toggleThemeBtn} text="Toggle theme" />;
};
