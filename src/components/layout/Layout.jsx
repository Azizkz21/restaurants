import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";
export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className={"page-main"}>{children}</main>
      <Footer />
    </>
  );
};
