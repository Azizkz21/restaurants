import { Review } from "../review/Review";
import style from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={style.reviewsInner}>
      <ul className={style.reviewsList}>
        {reviews.map((id) => (
          <li className={style.reviewsItem} key={id}>
            <Review key={id} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
