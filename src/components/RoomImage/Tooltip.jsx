import styles from "./Tooltip.module.css";

import moreInfoImg from "assets/tooltip_more.png";

const Tooltip = (props) => {
  return (
    <span
      className={styles.tooltip}
      id={props.productId}
      outside={props.outside}
    >
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className={styles.desc}>
        <div>{props.productName}</div>
        <div>
          {!props.outside && (
            <span className={styles["none-discount"]}>예상가</span>
          )}
          {props.outside && (
            <span className={styles.discount}>{props.discountRate}%</span>
          )}
          {!props.outside ? (
            <span>{props.priceOriginal}</span>
          ) : (
            <span>{props.priceDiscount}</span>
          )}
        </div>
      </div>
      <div className={styles.icon}>
        <img src={moreInfoImg} alt="more_info" />
      </div>
    </span>
  );
};

export default Tooltip;
