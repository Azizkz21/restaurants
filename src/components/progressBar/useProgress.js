import { useEffect, useState } from "react";

export const useProgress = () => {
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
  }, []);

  return percent;
};
