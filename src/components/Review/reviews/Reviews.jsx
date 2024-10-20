import { Review } from "../review/Review";
import style from "./reviews.module.scss";
import { useLoginUser } from "../../Context/loginContext/useLoginUser";
import { ReviewForm } from "../reviewForm/ReviewForm";

export const Reviews = ({ review }) => {
  const { login } = useLoginUser();

  return (
    <div className={style.reviewsInner}>
      <ul className={style.reviewsList}>
        {review.reviews.map((id) => (
          <li className={style.reviewsItem} key={id}>
            <Review key={id} id={id} />
          </li>
        ))}
      </ul>
      {login ? (
        <ReviewForm />
      ) : (
        <p className={style.reviewsComment}>
          Чтобы оставить комментарий нужно зарегестрироваться либо войти в
          аккаунт
        </p>
      )}
    </div>
  );
};
