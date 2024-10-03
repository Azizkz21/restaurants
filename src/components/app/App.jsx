import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurantsPage/RestaurantsPage";

// css style global
import "./global/global.scss";
import "./global/vars.scss";
import "./global/base.scss";
import "./global/utils.scss";
import "./global/sticky-footer.scss";

export const App = () => {
  return (
    <div className={"App"}>
      <Layout>
        <RestaurantsPage title="Рестораны" />
      </Layout>
    </div>
  );
};
