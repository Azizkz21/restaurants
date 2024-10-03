import { useProgress } from "./useProgress";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "10px",
        width: `${progress}%`,
        backgroundColor: "blue",
      }}
    ></div>
  );
};
