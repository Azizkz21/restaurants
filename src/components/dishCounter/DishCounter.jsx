import { useEffect } from "react";
import { useState } from "react";
import { Counter } from "../counter/Counter";

export const DishCounter = () => {
  const [value, setValue] = useState(0);

  const increment = () => (value < 5 ? setValue(value + 1) : setValue(value));
  const decrement = () =>
    setValue((prevState) => (prevState > 0 ? prevState - 1 : prevState));

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
