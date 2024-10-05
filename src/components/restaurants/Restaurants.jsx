import { DishCounter } from "../dishCounter/DishCounter";
import { Menu } from "../menu/Menu";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { Reviews } from "../reviews/Reviews";
import style from "./restaurants.module.scss";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <div className={style.restaurantsWrapper}>
        <div className={style.restaurantsTitle}>
          <h2>Меню</h2>
        </div>

        <div className={style.restaurantsMenu}>
          <h2>{name}</h2>
          {menu.length ? <Menu menu={menu} /> : <div>Блюда не готовы</div>}
          <DishCounter />
        </div>

        <div className={style.restaurantsReviews}>
          {reviews.length ? (
            <Reviews reviews={reviews} />
          ) : (
            <div>Пока нет отзывов. Вы можете стать первым</div>
          )}
          <ReviewForm />
        </div>
      </div>
    </section>
  );
};
