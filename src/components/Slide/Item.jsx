import { useSelector } from "react-redux";

import styles from "./Item.module.css";

const Item = (props) => {
  const selectedItem = useSelector((state) => state.productInfo.selectedItem);
  const isHide = useSelector((state) => state.productInfo.isHide);

  return (
    <div
      className={`${styles.wrapper} ${
        props.index === selectedItem && !isHide.isHide && styles.active
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
