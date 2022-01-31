import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.item}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        {props.discountRate > 0 && (
          <div className={styles.discount}>{props.discountRate}%</div>
        )}
      </div>
    </div>
  );
};

export default Item;
