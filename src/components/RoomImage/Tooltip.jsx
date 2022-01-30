import styles from "./Tooltip.module.css";
import moreInfoImg from "assets/tooltip_more.png";

const Tooltip = (props) => {
  return (
    <span className={styles.tooltip}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(' https://cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png')`,
        }}
      ></div>
      <div className={styles.desc}>
        <div>루아 자수 레이스 커튼</div>
        <div>
          <span>예상가</span>
          <span>62,900</span>
        </div>
      </div>
      <div className={styles.icon}>
        <img src={moreInfoImg} alt="more_info" />
      </div>
    </span>
  );
};

export default Tooltip;
