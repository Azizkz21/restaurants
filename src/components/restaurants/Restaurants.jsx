import style from "./restaurants.module.scss";
import { NavLink, Outlet } from "react-router-dom";

export const Restaurant = ({ name }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <div className={style.restaurantsWrapper}>
        <div className={style.restaurantsLink}>
          <NavLink to={"menu"}>Menu</NavLink>
          <NavLink to={"review"}>Reviews</NavLink>
        </div>

        <div className={style.restaurantsInner}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
