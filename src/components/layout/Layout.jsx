import { restaurants } from "../materials/mock";


export const Layout = ({ children }) => {
  return (
    <div>     
      <header>
        <nav>
          <ul>
            {restaurants.map(({ id, name }) => (
              <li data-id={id}>{name}</li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
