import style from "./review.module.scss";
import { useSelector } from "react-redux";
import { selectReviewsById } from "../../redux/reviews";
import { selectUsersById } from "../../redux/users";

export const Review = ({ id }) => {
  const reviewIds = useSelector((state) => selectReviewsById(state, id));
  const user = useSelector((state) => selectUsersById(state, reviewIds.userId));

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
