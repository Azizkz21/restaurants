import classNames from "classnames";
import style from "./counter.module.scss";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={classNames(style.counter__block)}>
      <button className={classNames(style.counter__button)} onClick={increment}>
        <span className={classNames(style.counter__plus)}>+</span>
      </button>
      <span className={classNames(style.counter__value)}>{value}</span>

      <button className={classNames(style.counter__button)} onClick={decrement}>
        <span className={classNames(style.counter__minus)}>-</span>
      </button>
    </div>
  );
};
