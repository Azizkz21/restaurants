import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / height) * 100;
      setPercent(scrollPercent);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [percent]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "10px",
        width: `${percent}%`,
        backgroundColor: "blue",
      }}
    ></div>
  );
};
