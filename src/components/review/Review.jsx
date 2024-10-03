import classNames from "classnames";
import style from "./review.module.scss";

export const Review = ({ user, text, rating }) => {
  return (
    <div className={classNames(style.review__inner)}>
      <h3>{user}</h3>
      <p>{text}</p>
      <span>{rating}</span>
    </div>
  );
};
