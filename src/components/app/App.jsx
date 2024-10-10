import { ThemeContextProvider } from "../themeContext/themeContext";
import { LoginContextProvider } from "../loginContext/loginContext";
import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurantsPage/RestaurantsPage";
import { Provider } from "react-redux";
// css style global
import "./global/global.scss";
import "./global/vars.scss";
import "./global/base.scss";
import "./global/utils.scss";
import "./global/sticky-footer.scss";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <div className={"App"}>
        <LoginContextProvider>
          <ThemeContextProvider>
            <Layout>
              <RestaurantsPage title="Рестораны" />
            </Layout>
          </ThemeContextProvider>
        </LoginContextProvider>
      </div>
    </Provider>
  );
};
