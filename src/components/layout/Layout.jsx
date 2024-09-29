import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";
export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
