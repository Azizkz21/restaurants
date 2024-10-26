import { useForm } from "./useForm";
import style from "./reviewForm.module.css";
import { Counter } from "../../Count/counter/Counter";
import {
  useAddReviewMutation,
  useEditReviewMutation,
} from "../../../redux/services/api/api";
import { useContext } from "react";
import { UserContext } from "../../Context/loginContext";

export const ReviewForm = ({
  restaurantId = "",
  isEdit = false,
  reviewId,
  reviewItem,
}) => {
  const {
    name,
    text,
    rating,
    setName,
    setText,
    setIncrementRating,
    setDecrementRating,
    setClear,
  } = useForm({
    userName: reviewItem?.userName,
    reviewText: reviewItem?.text,
    reviewRating: reviewItem?.rating,
  });

  const { login } = useContext(UserContext);

  const { userId } = login;

  const [addReview] = useAddReviewMutation();
  const [editReview] = useEditReviewMutation();

  const increment = () => {
    if (rating < 5) {
      setIncrementRating();
    }
  };

  const decrement = () => {
    if (rating > 1) {
      setDecrementRating();
    }
  };

  const onSubmit = () => {
    if (isEdit) {
      editReview({
        reviewId,
        review: {
          userId,
          text,
          rating,
        },
      });
    } else {
      addReview({
        restaurantId,
        review: {
          userId,
          text,
          rating,
        },
      });
    }
  };

  return (
    <form method="get" onSubmit={(e) => e.preventDefault()}>
      <div className={style.formInner}>
        <p>{isEdit ? "Edit" : "Write a review"}</p>
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
            id="reviewsUserText"
            name="reviewsUserText"
            value={text}
            placeholder="Введите ваш комментарий"
            onChange={(event) => {
              setText(event.target.value);
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
          <button className={style.formClear} onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
