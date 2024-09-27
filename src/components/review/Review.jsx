export const Review = ({ user, text, rating }) => {
  return (
    <div>
      <h3>{user}</h3>
      <p>{text}</p>
      <span>{rating}</span>
    </div>
  );
};
