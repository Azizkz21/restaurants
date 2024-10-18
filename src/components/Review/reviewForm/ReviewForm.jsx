import { useForm } from "./useForm";
import style from "./reviewForm.module.scss";
import { Counter } from "../../Count/counter/Counter";


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
    if (rating > 1) {
      setRating(rating - 1);
    }

    return;
  };

  return (
    <form method="get" onSubmit={(e) => e.preventDefault()}>
      <div className={style.formInner}>
        <ul className={style.formList}>
          <li className={style.formItem}>
            <label htmlFor="reviewsUserName">Имя:</label>
            <input
              className={style.formUserName}
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
        <div className={style.formCommentBlock}>
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
          <button className={style.formClear} onClick={setClear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};
