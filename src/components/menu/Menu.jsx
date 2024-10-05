
import style from "./menu.module.scss";

export const Menu = ({ menu }) => {
  return (
    <div className={style.menuInner}>
      <ul className={style.menuList}>
        {menu.map((menu) => (
          <li className={style.menuItem} key={menu.id}>
            <div className={style.menuBlock}> 
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
