import { LoginUser } from "../loginUser/loginUser";
import { ToggleThemeButton } from "../toggleThemeButton/toggleThemeButton";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>
          <h2>Order Food</h2>
        </div>
        <div className={styles.headerInner}>
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
