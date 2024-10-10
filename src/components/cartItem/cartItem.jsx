import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector(
    (state) => selectRestaurantsByIds(state, id) || {}
  );

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
