import { LoginUser } from "../loginUser/loginUser";
import { ToggleThemeButton } from "../UI-Button/toggleThemeButton/toggleThemeButton";
import { Watch } from "../watch/watch";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>
          <h2>Order Food</h2>
        </div>
        <div className={styles.headerInner}>
          <Watch />
          <div className={styles.headerForm}>
            <LoginUser />
          </div>
          <div className={styles.headerToggleTheme}>
            <ToggleThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};
