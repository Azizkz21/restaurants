import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
