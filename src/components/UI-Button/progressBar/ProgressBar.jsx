import { useProgress } from "./useProgress";
import styles from "./progress.module.css";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      className={styles.pogressBar}
      style={{
        width: `${progress}%`,
      }}
    ></div>
  );
};
