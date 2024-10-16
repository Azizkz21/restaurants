import { Counter } from "../counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/ui/cart";

export const DishCounter = ({ id }) => {
  const amount = useSelector((state) => selectAmountById(state, id));

  const dispatch = useDispatch();

  const increment = () => dispatch(addToCart(id));

  const decrement = () => dispatch(removeFromCart(id));

  return <Counter value={amount} increment={increment} decrement={decrement} />;
};
