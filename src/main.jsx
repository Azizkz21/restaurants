import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// компонент верстки карточки товара
root.render(
  <>
    <div>
      <nav>
        <ul>
          {restaurants.map(({ id, name }) => (
            <li>{name}</li>
          ))}
        </ul>
      </nav>
      <section>
        <div>
          <h1>Ресторан</h1>
          {restaurants.map(({ name, menu, reviews }) => (
            <div>
              <div>
                <h2>Меню</h2>
              </div>
              <div>
                <h3>{name}</h3>
                <ul>
                  {menu.map(({ name, price, ingredients }) => (
                    <li>
                      <h3>{name}</h3>
                      <p>{ingredients}</p>
                      <span>{price}</span>
                    </li>
                  ))}
                </ul>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  </>
);
