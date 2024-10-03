import classNames from "classnames";
import style from "./menu.module.scss";

export const Menu = ({ menu }) => {
  return (
    <div className={classNames(style.menu__inner)}>
      <ul className={classNames(style.menu__list)}>
        {menu.map((menu) => (
          <li className={classNames(style.menu__item)} key={menu.id}>
            <div className={classNames(style.menu__block)}> 
              <h3>{menu.name}</h3>
              <p>{menu.ingredients}</p>
              <span>{menu.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
