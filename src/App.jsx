"use client";

import { ThemeContextProvider } from "./components/Context/themeContext/themeContext";
import { LoginContextProvider } from "./components/Context/loginContext/loginContext";
import { Layout } from "./components/layout/Layout";
import { RestaurantsPage } from "./components/Page/restaurantsPage/RestaurantsPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RestaurantPage } from "./components/Page/restaurantPage/restaurantPage";
import { HomePage } from "./components/Page/HomePage/HomePage";
import { Menu } from "./components/Restaurant/menu/Menu";
import { DishPage } from "./components/Page/dishPage/dishPage";

// css style global
import "./components/global/global.css";
import "./components/global/vars.css";
import "./components/global/base.css";
import "./components/global/utils.css";
import "./components/global/sticky-footer.css";
import { ReviewsPage } from "./components/Page/reviewsPage/reviewsPage";

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

export default App;
