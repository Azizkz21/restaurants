import classnames from "classnames";
import styles from "./button.module.css";
import { useTheme } from "../../Context/themeContext/useTheme";

export const Button = ({
  onClick,
  text,
  sizeViewVariant = "default",
  isActive,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={classnames(styles.button, className, {
        [styles.default]: sizeViewVariant === "default",
        [styles.xl]: sizeViewVariant === "xl",
        [styles.softOrange]: theme === "softOrange",
        [styles.dark]: theme === "dark",
        [styles.tabActive]: isActive === true,
      })}
    >
      {text}
    </button>
  );
};
