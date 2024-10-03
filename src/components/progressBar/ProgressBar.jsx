import { useProgress } from "./useProgress";
import classNames from "classnames";
import styles from "./progress.module.scss";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      className={classNames(styles.pogressBar)}
      style={{
        width: `${progress}%`,
      }}
    ></div>
  );
};
