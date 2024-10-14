import { ThemeContextProvider } from "../themeContext/themeContext";
import { LoginContextProvider } from "../loginContext/loginContext";
import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurantsPage/RestaurantsPage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "../restaurantPage/restaurantPage";
import { HomePage } from "../HomePage/HomePage";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { DishPage } from "../dishPage/dishPage";

// css style global
import "./global/global.scss";
import "./global/vars.scss";
import "./global/base.scss";
import "./global/utils.scss";
import "./global/sticky-footer.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "restaurant",
        element: <RestaurantsPage title="Рестораны" />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              {
                path: "menu",
                element: <Menu />,
              },
              {
                path: "review",
                element: <Reviews />,
              },
            ],
          },
        ],
      },
      {
        path: "/homePage",
        element: (
          <HomePage title="Добро пожаловать на наше приложение по доставке еды" />
        ),
      },
      {
        path: "/dish/:dishId",
        element: <DishPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <div className={"App"}>
        <LoginContextProvider>
          <ThemeContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </ThemeContextProvider>
        </LoginContextProvider>
      </div>
    </Provider>
  );
};
