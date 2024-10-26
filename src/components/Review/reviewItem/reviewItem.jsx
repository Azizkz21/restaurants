import { useState } from "react";
import { useLoginUser } from "../../Context/loginContext/useLoginUser";
import { ReviewForm } from "../reviewForm/ReviewForm";
import style from "./review.module.css";

export const ReviewItem = ({ id, rating, text, userId, users }) => {
  const { login: auth } = useLoginUser();
  const { userName } = auth;
  const [isEdit, setIsEdit] = useState(false);
  const user = users.find((user) => user.id === userId);
  const reviewItem = {
    id,
    userId,
    text,
    rating,
    userName: user ? user.name : userName,
  };

  return (
    <div className={style.reviewInner} key={id}>
      <h3>{user ? user.name : userName}</h3>
      <p>{text}</p>
      <span className={style.reviewInnerSpan}>
        {Array.from(Array(rating), (_, i) => (
          <span key={i}>🌟</span>
        ))}
      </span>

      {!isEdit ? (
        <button
          className={style.reviewItemBtn}
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
      ) : (
        <button
          className={style.reviewItemBtn}
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Undo editing
        </button>
      )}
      {isEdit && (
        <ReviewForm reviewId={id} isEdit={isEdit} reviewItem={reviewItem} />
      )}
    </div>
  );
};
