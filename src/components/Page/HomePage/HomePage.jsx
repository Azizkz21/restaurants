import style from "./HomePage.module.scss";
export const HomePage = ({ title }) => {
  return (
    <section>
      <div className={style.homePageWrapper}>
        <div className={style.homePageTitleTop}>
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
};
