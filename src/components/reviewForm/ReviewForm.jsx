import { Counter } from "../counter/Counter";
import { useForm } from "./useForm";
import style from "./reviewForm.module.scss";
import classNames from "classnames";

export const ReviewForm = () => {
  const { name, comment, rating, setName, setComment, setRating, setClear } =
    useForm();

  const increment = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }

    return;
  };

  const decrement = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }

    return;
  };

  return (
    <form method="get" onSubmit={(e) => e.preventDefault()}>
      <div className={classNames(style.form__inner)}>
        <ul className={classNames(style.form__list)}>
          <li className={classNames(style.form__item)}>
            <label htmlFor="reviewsUserName">Имя:</label>
            <input
              className={classNames(style.form__userName)}
              id="reviewsUserName"
              type="text"
              value={name}
              placeholder="Введите ваше имя"
              onChange={(event) => {
                setName(event.target.value);
              }}
              name="reviewsUserName"
            ></input>
          </li>
        </ul>
        <div className={classNames(style.form__commentBlock)}>
          <textarea
            id="reviewsUserComment"
            name="reviewsUserComment"
            value={comment}
            placeholder="Введите ваш комментарий"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <Counter value={rating} increment={increment} decrement={decrement} />
        </div>
        <div>
          <button className={classNames(style.form__clear)} onClick={setClear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};
