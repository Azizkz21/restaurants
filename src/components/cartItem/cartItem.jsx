import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dish";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <div>
        {name} - {amount}
      </div>
    </div>
  );
};
