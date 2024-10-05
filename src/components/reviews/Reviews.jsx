import { Review } from "../review/Review";
import classNames from "classnames";
import style from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={style.reviewsInner}>
      <ul className={style.reviewsList}>
        {reviews.map(({ id, user, text, rating }) => (
          <li className={style.reviewsItem} key={id}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};
