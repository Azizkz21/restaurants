import { Outlet } from "react-router-dom";
import { Cart } from "../UI-Button/cart/cart";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../UI-Button/progressBar/ProgressBar";

import style from "./layout.module.css";
export const Layout = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className={style.pageMain}>
        <Outlet />
      </main>
      <Cart />
      <Footer />
    </>
  );
};
