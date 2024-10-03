import classNames from "classnames";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={classNames(styles["footer__wrapper"])}>
        <h2>copyright REACT</h2>
      </div>
    </footer>
  );
};
