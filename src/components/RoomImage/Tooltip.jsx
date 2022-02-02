import { useSelector } from "react-redux";
import moreInfoImg from "assets/tooltip_more.png";

import styles from "./Tooltip.module.css";

const Tooltip = ({ index }) => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);
  const selectedRoomItem = useSelector(
    (state) => state.productInfo.selectedRoomItem
  );

  const productData = productInfo[index];
  const isOutside = productData.outside;

  return (
    <span
      className={`${styles.tooltip} ${
        (index <= 1 || index === 5) && styles.downtip
      } ${selectedRoomItem !== index && styles.hide}`}
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
          {isOutside ? (
            <span className={`${styles["non-discount"]}`}>예상가</span>
          ) : (
            <span className={styles.discount}>{productData.discountRate}%</span>
          )}

          {isOutside ? (
            <span>{productData.priceOriginal.toLocaleString()}</span>
          ) : (
            <span>{productData.priceDiscount.toLocaleString()}</span>
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
