import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// компонент верстки карточки товара
root.render(
  createElement(
    "div",
    {},
    createElement(
      "nav",
      {},
      // рендер по разделам выбора кухни
      createElement(
        "ul",
        {},
        createElement("li", { id: "" }, "All"),
        createElement("li", { id: restaurants[0].id }, restaurants[0].name),
        createElement("li", { id: restaurants[1].id }, restaurants[1].name),
        createElement("li", { id: restaurants[2].id }, restaurants[2].name),
        createElement("li", { id: restaurants[3].id }, restaurants[3].name)
      )
    ),
    // 1
    createElement(
      "section",
      { id: restaurants[0].id },
      createElement("h3", {}, restaurants[0].name),
      createElement("h3", {}, "Меню"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[0].menu[0].id },
          createElement("h2", {}, restaurants[0].menu[0].name),
          createElement("span", {}, restaurants[0].menu[0].price),
          createElement("p", {}, restaurants[0].menu[0].ingredients)
        ),
        createElement(
          "li",
          { id: restaurants[0].menu[1].id },
          createElement("h2", {}, restaurants[0].menu[1].name),
          createElement("span", {}, restaurants[0].menu[1].price),
          createElement("p", {}, restaurants[0].menu[1].ingredients)
        ),
        createElement(
          "li",
          { id: restaurants[0].menu[2].id },
          createElement("h2", {}, restaurants[0].menu[2].name),
          createElement("span", {}, restaurants[0].menu[2].price),
          createElement("p", {}, restaurants[0].menu[2].ingredients)
        )
      ),
      createElement("h3", {}, "Отзывы"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[0].reviews[0].id },
          createElement("h4", {}, restaurants[0].reviews[0].user),
          createElement("p", {}, restaurants[0].reviews[0].text),
          createElement("span", {}, restaurants[0].reviews[0].rating)
        ),
        createElement(
          "li",
          { id: restaurants[0].reviews[1].id },
          createElement("h4", {}, restaurants[0].reviews[1].user),
          createElement("p", {}, restaurants[0].reviews[1].text),
          createElement("span", {}, restaurants[0].reviews[1].rating)
        )
      )
    ),
    // 2
    createElement(
      "section",
      { id: restaurants[1].id },
      createElement("h3", {}, restaurants[1].name),
      createElement("h3", {}, "Меню"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[1].menu[0].id },
          createElement("h2", {}, restaurants[1].menu[0].name),
          createElement("span", {}, restaurants[1].menu[0].price),
          createElement("p", {}, restaurants[1].menu[0].ingredients)
        ),
        createElement(
          "li",
          { id: restaurants[1].menu[1].id },
          createElement("h2", {}, restaurants[1].menu[1].name),
          createElement("span", {}, restaurants[1].menu[1].price),
          createElement("p", {}, restaurants[1].menu[1].ingredients)
        )
      ),
      createElement("h3", {}, "Отзывы"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[1].reviews[0].id },
          createElement("h4", {}, restaurants[1].reviews[0].user),
          createElement("p", {}, restaurants[1].reviews[0].text),
          createElement("span", {}, restaurants[1].reviews[0].rating)
        ),
        createElement(
          "li",
          { id: restaurants[1].reviews[1].id },
          createElement("h4", {}, restaurants[1].reviews[1].user),
          createElement("p", {}, restaurants[1].reviews[1].text),
          createElement("span", {}, restaurants[1].reviews[1].rating)
        ),
        createElement(
          "li",
          { id: restaurants[1].reviews[2].id },
          createElement("h4", {}, restaurants[1].reviews[2].user),
          createElement("p", {}, restaurants[1].reviews[2].text),
          createElement("span", {}, restaurants[1].reviews[2].rating)
        )
      )
    ),
    // 3
    createElement(
      "section",
      { id: restaurants[2].id },
      createElement("h3", {}, restaurants[2].name),
      createElement("h3", {}, "Меню"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[2].menu[0].id },
          createElement("h2", {}, restaurants[2].menu[0].name),
          createElement("span", {}, restaurants[2].menu[0].price),
          createElement("p", {}, restaurants[2].menu[0].ingredients)
        ),
        createElement(
          "li",
          { id: restaurants[2].menu[1].id },
          createElement("h2", {}, restaurants[2].menu[1].name),
          createElement("span", {}, restaurants[2].menu[1].price),
          createElement("p", {}, restaurants[2].menu[1].ingredients)
        ),
        createElement(
          "li",
          { id: restaurants[2].menu[2].id },
          createElement("h2", {}, restaurants[2].menu[2].name),
          createElement("span", {}, restaurants[2].menu[2].price),
          createElement("p", {}, restaurants[2].menu[2].ingredients)
        )
      ),
      createElement("h3", {}, "Отзывы"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[2].reviews[0].id },
          createElement("h4", {}, restaurants[2].reviews[0].user),
          createElement("p", {}, restaurants[2].reviews[0].text),
          createElement("span", {}, restaurants[2].reviews[0].rating)
        )
      )
    ),
    // 4
    createElement(
      "section",
      { id: restaurants[3].id },
      createElement("h3", {}, restaurants[3].name),
      createElement("h3", {}, "Меню"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[3].menu[0].id },
          createElement("h2", {}, restaurants[3].menu[0].name),
          createElement("span", {}, restaurants[3].menu[0].price),
          createElement("p", {}, restaurants[3].menu[0].ingredients)
        ),
        createElement(
          "li",
          { id: restaurants[3].menu[1].id },
          createElement("h2", {}, restaurants[3].menu[1].name),
          createElement("span", {}, restaurants[3].menu[1].price),
          createElement("p", {}, restaurants[3].menu[1].ingredients)
        )
      ),
      createElement("h3", {}, "Отзывы"),
      createElement(
        "ul",
        {},
        createElement(
          "li",
          { id: restaurants[3].reviews[0].id },
          createElement("h4", {}, restaurants[3].reviews[0].user),
          createElement("p", {}, restaurants[3].reviews[0].text),
          createElement("span", {}, restaurants[3].reviews[0].rating)
        ),
        createElement(
          "li",
          { id: restaurants[3].reviews[1].id },
          createElement("h4", {}, restaurants[3].reviews[1].user),
          createElement("p", {}, restaurants[3].reviews[1].text),
          createElement("span", {}, restaurants[3].reviews[1].rating)
        )
      )
    )
  )
);
