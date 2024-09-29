import { Counter } from "../counter/Counter";
import { useForm } from "./useForm";
import reviewForm from "./reviewForm.module.css";

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
      <div className={reviewForm.formInner}>
        <ul className={reviewForm.formList}>
          <li>
            <label htmlFor="reviewsUserName">Имя</label>
            <input
              id="reviewsUserName"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              name="reviewsUserName"
            ></input>
          </li>
        </ul>
        <div>
          <textarea
            id="reviewsUserComment"
            name="reviewsUserComment"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <Counter value={rating} increment={increment} decrement={decrement} />
        </div>
        <div>
          <button onClick={setClear}>Clear</button>
        </div>
      </div>
    </form>
  );
};
