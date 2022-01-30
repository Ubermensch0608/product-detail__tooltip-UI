import styles from "./Tooltip.module.css";

import moreInfoImg from "assets/tooltip_more.png";
import { useSelector } from "react-redux";
import { useState } from "react";

const Tooltip = (props) => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);

  const productData = productInfo[props.index];

  return (
    <span
      className={`${styles.tooltip} ${props.className}`}
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
        <div>
          {productData.outside && (
            <span className={styles["none-discount"]}>예상가</span>
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
