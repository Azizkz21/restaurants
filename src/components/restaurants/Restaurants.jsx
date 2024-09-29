import { DishCounter } from "../dishCounter/DishCounter";
import { Menu } from "../menu/Menu";
import { ReviewForm } from "../reviewForm/ReviewForm";
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
          <DishCounter />
          {reviews.length ? (
            <Reviews reviews={reviews} />
          ) : (
            <div>Пока нет отзывов. Вы можете стать первым</div>
          )}
        </div>
        <ReviewForm />
      </div>
    </section>
  );
};
