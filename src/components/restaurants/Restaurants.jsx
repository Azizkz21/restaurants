import { Count } from "../count/Count";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <div>
        <div>
          <h2>Меню</h2>
          <h3>{name}</h3>
          {menu.length ? <Menu menu={menu} /> : <div>Блюда не готовы</div>}
          <Count />
          {reviews.length ? (
            <Reviews reviews={reviews} />
          ) : (
            <div>Пока нет отзывов. Вы можете стать первым</div>
          )}
        </div>
      </div>
    </section>
  );
};
