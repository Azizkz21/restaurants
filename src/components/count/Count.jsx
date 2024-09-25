import { useState } from "react";

export const Count = () => {
  const [value, setValue] = useState({ value: 0 });

  const increase = () => {
    setValue((current) => {
      return {
        value: current.value < 5 ? current.value + 1 : 5,
      };
    });
  };
  const decrease = () => {
    setValue((current) => {
      return {
        value: current.value < 0 ? current.value - 1 : 0,
      };
    });
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      {value.value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
