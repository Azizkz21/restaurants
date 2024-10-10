import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart";
import { CartItem } from "../cartItem/cartItem";
import { DishCounter } from "../dishCounter/DishCounter";
import style from "./cart.module.scss";
export const Cart = () => {
  const items = useSelector(selectCartItems);
  if (!items.length) {
    return null;
  }

  return (
    <div className={style.Cart}>
      <h3>Basket</h3>
      <ul className={style.CartList}>
        {items.map(({ id, amount }) => (
          <li className={style.CartItem} key={id}>
            <CartItem id={id} amount={amount} />
            <DishCounter id={id} />
          </li>
        ))}
      </ul>
      <div className={style.CartBg}></div>
    </div>
  );
};