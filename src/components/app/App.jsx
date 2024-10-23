import { ThemeContextProvider } from "../Context/themeContext/themeContext";
import { LoginContextProvider } from "../Context/loginContext/loginContext";
import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../Page/restaurantsPage/RestaurantsPage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RestaurantPage } from "../Page/restaurantPage/restaurantPage";
import { HomePage } from "../Page/HomePage/HomePage";
import { Menu } from "../Restaurant/menu/Menu";
import { DishPage } from "../Page/dishPage/dishPage";

// css style global
import "./global/global.scss";
import "./global/vars.scss";
import "./global/base.scss";
import "./global/utils.scss";
import "./global/sticky-footer.scss";
import { ReviewsPage } from "../Page/reviewsPage/reviewsPage";

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
                index: true,
                element: <Navigate to="menu" />,
              },
              {
                path: "menu",
                element: <Menu />,
              },
              {
                path: "review",
                element: <ReviewsPage />,
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
