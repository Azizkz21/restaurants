import { Review } from "../review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(({id, user, text, rating }) => (
          <li key={id}>
            <Review  user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};
