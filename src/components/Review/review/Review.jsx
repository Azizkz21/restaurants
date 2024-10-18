import { useEffect } from "react";
import {
  selectReviewsById,
  selectReviewsRequestStatus,
} from "../../../redux/reviews";
import style from "./review.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, PENDING, REJECTED } from "../../../constats/constats";
import { getReviews } from "../../../redux/reviews/get-reviews";
import { UsersReview } from "./usersReview";

export const Review = ({ id }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) => selectReviewsById(state, id));

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);


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
      <span>{reviewIds.rating}</span>
    </div>
  );
};
