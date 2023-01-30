import MoreIcon from "../icons/MoreIcon";
import s from "./Block.module.scss";

const Block = ({ title, children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title_wrapper}>
        <span className={s.title}>{title}</span>
        <span>
          <MoreIcon className={s.icon} />
        </span>
      </div>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default Block;
