import { ReviewItem } from "../reviewItem/reviewItem";
import style from "./reviews.module.css";
import { useLoginUser } from "../../Context/loginContext/useLoginUser";
import { ReviewForm } from "../reviewForm/ReviewForm";
import {
  useGetReviewsByIdQuery,
  useGetUsersQuery,
} from "../../../redux/services/api/api";


export const Reviews = ({ id }) => {
  const { login } = useLoginUser();
  const { userName } = login;

  const { data, isFetching, isError } = useGetReviewsByIdQuery(id);
  const {
    data: users,
    isLoading: loading,
    isError: error,
  } = useGetUsersQuery();

  if (isFetching || loading) {
    return `Loading...`;
  }

  if (isError || error) {
    return <div>Error</div>;
  }

  if (!data?.length || !users?.length) {
    return null;
  }

  return (
    <div className={style.reviewsInner}>
      <ul className={style.reviewsList}>
        {data.map(({ id, rating, text, userId }) => (
          <li className={style.reviewsItem} key={id}>
            <ReviewItem
              key={id}
              id={id}
              rating={rating}
              text={text}
              userId={userId}
              users={users}
            />
          </li>
        ))}
      </ul>
      {userName && <ReviewForm restaurantId={id} />}
    </div>
  );
};
