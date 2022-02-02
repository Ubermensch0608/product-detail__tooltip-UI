import { useSelector } from "react-redux";

import styles from "./SlideItem.module.css";

const Item = ({ index, onSelectSlideItem }) => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);
  const selectedSlideItem = useSelector(
    (state) => state.productInfo.selectedSlideItem
  );

  const productData = productInfo[index];

  return (
    <div
      className={`${styles.wrapper} ${
        index === selectedSlideItem && styles.active
      }`}
    >
      <div
        className={styles.item}
        id={index}
        style={{ backgroundImage: `url(${productData.imageUrl})` }}
        onClick={onSelectSlideItem}
      >
        {productData.discountRate > 0 && (
          <div className={styles.discount}>{productData.discountRate}%</div>
        )}
      </div>
    </div>
  );
};

export default Item;
