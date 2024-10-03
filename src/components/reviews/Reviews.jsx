import { Review } from "../review/Review";
import classNames from "classnames";
import style from "./reviews.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={classNames(style.reviews__inner)}>
      <ul className={classNames(style.reviews__list)}>
        {reviews.map(({ id, user, text, rating }) => (
          <li className={classNames(style.reviews__item)} key={id}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};
