import { Button } from "../button/Button";
import { useTheme } from "../themeContext/useTheme";
import style from "./toggleThemeButton.module.scss"

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();
  return <Button onClick={toggleTheme} className={style.toggleThemeBtn} text="Toggle theme" />;
};
