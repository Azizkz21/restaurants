import classNames from "classnames";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h2>copyright REACT</h2>
      </div>
    </footer>
  );
};
