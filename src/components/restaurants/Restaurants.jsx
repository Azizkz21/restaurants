import { Count } from "../count/Count";

export const Restaurant = ({  name, menu, reviews }) => {
  return (
    <section>
      <div>
        <div >
          {menu.length > 0 ? (
            <div>
              <h2>Меню</h2>
              <h3>{name}</h3>
              <ul>
                {menu.map((menu) => (
                  <li>
                    <h3>{menu.name}</h3>
                    <p>{menu.ingredients}</p>
                    <span>{menu.price}</span>
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
                {reviews.map((review) => (
                  <li>
                    <h3>{review.user}</h3>
                    <p>{review.text}</p>
                    <span>{review.rating}</span>
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
