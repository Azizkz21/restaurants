import { Layout } from "../layout/Layout";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../restaurants/Restaurants";

export const App = ({ title }) => {
  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <Restaurant id={id} name={name} menu={menu} reviews={reviews} />
        ))}
      </Layout>
    </div>
  );
};
