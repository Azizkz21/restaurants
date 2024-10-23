import { ReviewItem } from "../reviewItem/reviewItem";
import style from "./reviews.module.scss";
import { useLoginUser } from "../../Context/loginContext/useLoginUser";
import { ReviewForm } from "../reviewForm/ReviewForm";

export const Reviews = ({ restaurant }) => {
  const { login } = useLoginUser();
  const { reviews } = restaurant;

  return (
    <div className={style.reviewsInner}>
      <ul className={style.reviewsList}>
        {reviews.map((id) => (
          <li className={style.reviewsItem} key={id}>
            <ReviewItem key={id} id={id} />
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
