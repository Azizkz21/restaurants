import { DishCounter } from "../dishCounter/DishCounter";
import { Menu } from "../menu/Menu";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { Reviews } from "../reviews/Reviews";
import classNames from "classnames";
import style from "./restaurants.module.scss";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <div className={classNames(style["restaurants_wrapper"])}>
        <div className={classNames(style["restaurants_title"])}>
          <h2>Меню</h2>
        </div>

        <div className={classNames(style["restaurants_menu"])}>
          <h2>{name}</h2>
          {menu.length ? <Menu menu={menu} /> : <div>Блюда не готовы</div>}
          <DishCounter />
        </div>

        <div className={classNames(style["restaurants_reviews"])}>
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
