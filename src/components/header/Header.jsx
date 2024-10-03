import classNames from "classnames";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={classNames(styles['header__wrapper'])}>
        <h2>Order Food</h2>
      </div>
    </header>
  );
};
