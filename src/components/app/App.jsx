import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurantsPage/RestaurantsPage";

export const App = () => {
  return (
    <div>
      <Layout>
        <RestaurantsPage title="Рестораны" />
      </Layout>
    </div>
  );
};
