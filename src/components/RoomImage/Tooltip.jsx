import { useSelector } from "react-redux";
import moreInfoImg from "assets/tooltip_more.png";

import styles from "./Tooltip.module.css";

const Tooltip = (props) => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);
  const isHide = useSelector((state) => state.productInfo.isHide);

  const productData = productInfo[props.index];

  return (
    <span
      className={`${styles.tooltip}  ${
        (isHide.productNumber !== props.index && styles.hide) ||
        (isHide.isHide && styles.hide)
      }`}
      id={productData.productId}
    >
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${productData.imageUrl})`,
        }}
      ></div>
      <div className={styles.desc}>
        <div>{productData.productName}</div>
        <div className={styles.price}>
          {productData.outside && (
            <span className={`${styles["non-discount"]}`}>예상가</span>
          )}
          {!productData.outside && (
            <span className={styles.discount}>{productData.discountRate}%</span>
          )}
          {productData.outside ? (
            <span>{productData.priceOriginal}</span>
          ) : (
            <span>{productData.priceDiscount}</span>
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
