import s from "./Title.module.scss";

const Title = () => (
  <h1 className={s.title}>
    Welcome to <span className={s.title_colored}>MPI Stylus Web 2.0</span>
  </h1>
);

export default Title;
