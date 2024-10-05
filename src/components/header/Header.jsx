import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <h2>Order Food</h2>
      </div>
    </header>
  );
};
