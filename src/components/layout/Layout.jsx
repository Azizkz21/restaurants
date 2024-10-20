import { Outlet } from "react-router-dom";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";

import style from "./layout.module.scss";
export const Layout = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className={style.pageMain}><Outlet/></main>
      <Cart />
      <Footer />
    </>
  );
};
