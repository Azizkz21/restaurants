import { useSelector } from "react-redux";
import { selectDishByIds } from "../../redux/dish";


export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectDishByIds(state, id)) || {};

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
