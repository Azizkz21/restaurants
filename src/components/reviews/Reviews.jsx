import { useParams } from "react-router-dom";
import { Review } from "../review/Review";
import style from "./reviews.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../redux/restaurants";
import { useLoginUser } from "../loginContext/useLoginUser";
import { ReviewForm } from "../reviewForm/ReviewForm";

export const Reviews = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, restaurantId)
  );

  const { login } = useLoginUser();
  return (
    <div className={style.reviewsInner}>
      <ul className={style.reviewsList}>
        {restaurant.reviews.map((id) => (
          <li className={style.reviewsItem} key={id}>
            <Review key={id} id={id} />
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
