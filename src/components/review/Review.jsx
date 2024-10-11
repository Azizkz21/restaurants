import style from "./review.module.scss";
import { useSelector } from "react-redux";
import { selectReviewsByIds } from "../../redux/reviews";
import { selectUsersByIds } from "../../redux/users";

export const Review = ({ id }) => {
  const reviewIds = useSelector((state) => selectReviewsByIds(state, id));
  const user = useSelector((state) =>
    selectUsersByIds(state, reviewIds.userId)
  );

  if (!reviewIds) {
    return null;
  }

  return (
    <div className={style.reviewInner} key={reviewIds}>
      <h3>{user.name}</h3>
      <p>{reviewIds.text}</p>
      <span>{reviewIds.rating}</span>
    </div>
  );
};
