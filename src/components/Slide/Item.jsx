import { useSelector } from "react-redux";

import styles from "./Item.module.css";

const Item = ({ index, imageUrl, discountRate, onClick }) => {
  const selectedItem = useSelector((state) => state.productInfo.selectedItem);

  return (
    <div
      className={`${styles.wrapper} ${index === selectedItem && styles.active}`}
    >
      <div
        className={styles.item}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={onClick}
      >
        {discountRate > 0 && (
          <div className={styles.discount}>{discountRate}%</div>
        )}
      </div>
    </div>
  );
};

export default Item;
