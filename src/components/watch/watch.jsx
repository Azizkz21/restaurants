import { useState } from "react";
import { useWatch } from "./useWatch";
import style from "./watch.module.scss";
import classnames from "classnames";
import { useTheme } from "../themeContext/useTheme";

export const Watch = () => {
  const date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);
  useWatch(setTime);

  const { theme } = useTheme();

  return (
    <div
      className={classnames(style.watchInner, {
        [style.softOrange]: theme === "softOrange",
        [style.dark]: theme === "dark",
      })}
    >
      <p>Время: {time}</p>
    </div>
  );
};
