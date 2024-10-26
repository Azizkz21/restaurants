import style from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={style.counterBlock}>
      <button className={style.button} onClick={increment}>
        <span className={style.counterPlus}>+</span>
      </button>
      <span className={style.counterValue}>{value}</span>

      <button className={style.button} onClick={decrement}>
        <span className={style.counterMinus}>-</span>
      </button>
    </div>
  );
};
