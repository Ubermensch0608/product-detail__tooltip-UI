import { useSelector } from "react-redux";

import styles from "./Item.module.css";

const Item = (props) => {
  const selectedItem = useSelector((state) => state.productInfo.selectedItem);

  return (
    <div
      className={`${styles.wrapper} ${
        props.index === selectedItem && styles.active
      }`}
    >
      <div
        className={styles.item}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        onClick={props.onClick}
      >
        {props.discountRate > 0 && (
          <div className={styles.discount}>{props.discountRate}%</div>
        )}
      </div>
    </div>
  );
};

export default Item;
