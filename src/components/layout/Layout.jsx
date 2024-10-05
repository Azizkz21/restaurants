import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";
import style from "./layout.module.scss"
export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className={style.pageMain}>{children}</main>
      <Footer />
    </>
  );
};
