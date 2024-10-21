
import style from "./review.module.scss";
import { useSelector } from "react-redux";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { UsersReview } from "./usersReview";
import { selectReviewsById, selectReviewsRequestStatus } from "../../../redux/entities/reviews";

export const ReviewItem = ({ id }) => {
  const reviewIds = useSelector((state) => selectReviewsById(state, id));
  const requestStatus = useSelector(selectReviewsRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "Loading...";
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  if (!reviewIds) {
    return null;
  }

  return (
    <div className={style.reviewInner} key={reviewIds}>
      <UsersReview userId={reviewIds.userId} />
      <p>{reviewIds.text}</p>
      <span>
        {Array.from(Array(reviewIds.rating), (_, i) => (
          <span key={i}>🌟</span>
        ))}
      </span>
    </div>
  );
};
