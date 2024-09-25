import { Count } from "../count/Count";

export const Restaurant = ({ id, name, menu, reviews }) => {
  return (
    <section>
      <div>
        <div data-id={id}>
          {menu.length > 0 ? (
            <div>
              <h2>Меню</h2>
              <h3>{name}</h3>
              <ul>
                {menu.map(({ name, price, ingredients }) => (
                  <li>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    <span>{price}</span>
                    <Count />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>Блюда не готовы</div>
          )}

          {reviews.length > 0 ? (
            <div>
              <h2>Отзывы</h2>
              <ul>
                {reviews.map(({ user, text, rating }) => (
                  <li>
                    <h3>{user}</h3>
                    <p>{text}</p>
                    <span>{rating}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>Пока нет отзывов. Вы можете стать первым</div>
          )}
        </div>
      </div>
    </section>
  );
};
